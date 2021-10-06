import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('615d2a5948ae9') // Your project ID
;


 export const account = sdk.account;