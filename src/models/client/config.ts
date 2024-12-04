import { env } from "@/app/env";

import { Client, Avatars, Databases, Account, Storage } from "appwrite";

const client = new Client();
client.setEndpoint(env.apprite.endPoint).setProject(env.apprite.projectId);

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, account, databases, avatars, storage };
