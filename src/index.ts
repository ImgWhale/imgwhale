import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import fastifyMultipart from 'fastify-multipart';
import api from './api';

const app = Fastify({ logger: false });
app.register(fastifyMultipart);

app.post('/new', async (request: FastifyRequest, reply: FastifyReply) => {
    const data = await request.file();
    if (!data) return reply.code(400).send({ error: true, message: 'IMAGE_FIELD_EMPTY' });
    const fileId = await api.uploadImage(await data.toBuffer());
    return reply.code(200).send({ error: false, message: 'IMAGE_UPLOADED', fileId: fileId });
});

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.redirect('https://docs.imgwhale.xyz');
});

app.get('/*', async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const fileId = request.params['*'];
    if (!fileId) return reply.code(400).send({ error: true, message: 'IMAGE_ID_EMPTY' });
    const data = await api.downloadImage(fileId);
    if (typeof data == 'string') return reply.code(400).send({ error: true, message: data });
    return reply.code(200).header('Content-Type', 'image/jpeg').send(data);
});

export default app;
