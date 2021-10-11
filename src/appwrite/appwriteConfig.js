import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('6162ddf66926e') // Your project ID
;

export const storage = sdk.storage;
export const account = sdk.account;