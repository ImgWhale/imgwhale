import { Dropbox } from 'dropbox';
import uniqid from 'uniqid';

async function uploadImage(buffer: Buffer): Promise<string> {
    const client = new Dropbox({
        accessToken: process.env.dropboxAccessToken || 'hxx7lHh89HoAAAAAAAAAAT_Z-tkk-tm2rSeOuJ_O-Q2UlhPNJHY3voerMRsWDm6T',
        clientId: process.env.dropboxClientId || 'vihwn8vyzucm77o',
        clientSecret: process.env.dropboxClientSecret || '9hiurss4llve03m',
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
        accessToken: process.env.dropboxAccessToken || 'hxx7lHh89HoAAAAAAAAAAT_Z-tkk-tm2rSeOuJ_O-Q2UlhPNJHY3voerMRsWDm6T',
        clientId: process.env.dropboxClientId || 'vihwn8vyzucm77o',
        clientSecret: process.env.dropboxClientSecret || '9hiurss4llve03m',
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