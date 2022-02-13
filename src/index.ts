import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import fastifyMultipart from 'fastify-multipart';
import api from './api';
import Limiter from './limiter';

const app = Fastify({ logger: false });
app.register(fastifyMultipart);
// A max of 49 requests per 10 minutes is allowed for each IP address.
const apiLimiter = new Limiter(7 * 7);

// Insert new image to server
app.post('/new', async (request: FastifyRequest, reply: FastifyReply) => {
    const data = await request.file();
    if (!data) return reply.code(400).send({ error: true, message: 'IMAGE_FIELD_EMPTY' });
    // Max file size is 10MB
    if ((await data.toBuffer()).byteLength > 10 * 1024 * 1024) {
        return reply.code(400).send({ error: true, message: 'IMAGE_TOO_LARGE' });
    }
    if (apiLimiter.isLimited(String(request.headers['x-forwarded-for']) || request.ip)) {
        return reply.code(429).send({ error: true, message: 'TOO_MANY_REQUESTS' });
    }
    apiLimiter.incrementLimit(String(request.headers['x-forwarded-for']) || request.ip);
    const fileId = await api.uploadImage(await data.toBuffer());
    return reply.code(200).send({ error: false, message: 'IMAGE_UPLOADED', fileId: fileId });
});

app.post('/*', async (_request: FastifyRequest, reply: FastifyReply) => {
    return reply.code(400).send({ error: true, message: 'INVALID_ENDPOINT' });
});

// Redirect to docs if no endpoint is specified
app.get('/', async (_request: FastifyRequest, reply: FastifyReply) => {
    return reply.redirect('https://docs.imgwhale.xyz');
});

// Return image to specified id
app.get('/*', async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const fileId = request.params['*'];
    if (!fileId) return reply.code(400).send({ error: true, message: 'IMAGE_ID_EMPTY' });
    const data = await api.downloadImage(fileId);
    if (typeof data == 'string') return reply.code(400).send({ error: true, message: data });
    return reply.code(200).header('Content-Type', 'image/jpeg').send(data);
});

export default app;
