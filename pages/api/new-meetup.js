import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = MongoClient.connect(
      "mongodb+srv://new_user:ARnxAFXv4a6kwzs6@cluster0.cphv3uh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0",
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Message inserted!" });
  }
}

export default handler;
