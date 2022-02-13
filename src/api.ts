import { Dropbox } from 'dropbox';
import uniqid from 'uniqid';

async function uploadImage(buffer: Buffer): Promise<string> {
    const client = new Dropbox({
        accessToken: process.env.dropboxAccessToken,
        clientId: process.env.dropboxClientId,
        clientSecret: process.env.dropboxClientSecret,
    });
    let fileId = uniqid();
    await client.filesUpload({
        contents: buffer,
        path: `/${fileId}.jpg`,
    });
    return fileId;
}

async function downloadImage(fileId: string): Promise<Buffer | string> {
    const client = new Dropbox({
        accessToken: process.env.dropboxAccessToken,
        clientId: process.env.dropboxClientId,
        clientSecret: process.env.dropboxClientSecret,
    });
    try {
        const response = await client.filesDownload({ path: `/${fileId}.jpg`,});
        // @ts-ignore
        return response.result.fileBinary;
    } catch (error: any) {
        return 'IMAGE_NOT_FOUND';
    }
}

export default {
    uploadImage,
    downloadImage,
};