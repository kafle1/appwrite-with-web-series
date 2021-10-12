import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('616453bd22186') // Your project ID
;

export const db = sdk.database;
export const account =sdk.account;

 export const COLLECTION_ID = '616453cdbd1c2';