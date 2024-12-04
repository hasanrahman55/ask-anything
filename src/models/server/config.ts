import { env } from "@/app/env";
import { Client, Storage, Avatars, Databases, Users } from "node-appwrite";

const client = new Client();

client
  .setEndpoint(env.apprite.endPoint)
  .setProject(env.apprite.projectId)
  .setKey(env.apprite.apiKey);

const users = new Users(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, users, databases, avatars, storage };
