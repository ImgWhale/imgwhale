import 'dotenv/config';
import app from './src';

(async () => {
    await app.listen(process.env.PORT || 1134, '0.0.0.0');
    console.log(`[INFO] imgwhale started at ${process.env.PORT || 1134} !`);
})();