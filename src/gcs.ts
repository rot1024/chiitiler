import { Storage, type StorageOptions } from '@google-cloud/storage';

let storageClient: Storage; // singleton
const getStorageClient = function ({
    projectId,
    keyFilename,
}: {
    projectId?: string;
    keyFilename?: string;
}) {
    if (storageClient !== undefined) return storageClient;

    const storageOptions: StorageOptions = {
        projectId,
        keyFilename,
    };

    storageClient = new Storage(storageOptions);
    return storageClient;
};

export { getStorageClient };
