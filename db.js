import { MongoClient } from "mongodb";
import Obj from "mongodb";

let MongoURL = "mongodb+srv://sivapucc:siva95@cluster0.zdqwd.mongodb.net/?";

async function createConnection() {
  let client = new MongoClient(MongoURL);
  await client.connect();
  return client;
}

export var ObjectId = Obj.ObjectId;
export let client = await createConnection();
