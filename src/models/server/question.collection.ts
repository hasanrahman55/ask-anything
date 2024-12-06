import { Permission } from "appwrite";
import { db, qustionCollection } from "../name";

import { databases } from "./config";

export default async function createQuestionColletion() {
  await databases.createCollection(db, qustionCollection, qustionCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log("question collection created");

  //create attributes

  await Promise.all([
    databases.createStringAttribute(db, qustionCollection, "title", 100, true),
    databases.createStringAttribute(
      db,
      qustionCollection,
      "content",
      10000,
      true
    ),
    databases.createStringAttribute(
      db,
      qustionCollection,
      "authorId",
      50,
      true
    ),

    databases.createStringAttribute(
      db,
      qustionCollection,
      "tags",
      50,
      true,
      undefined,
      true
    ),

    databases.createStringAttribute(
      db,
      qustionCollection,
      "attachmentId",
      50,
      false,
      undefined
    ),
  ]);
  console.log("question collection attributes created");
}
