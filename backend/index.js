const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const port = 5000 || process.env.PORT;
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.post("/details", async (req, res) => {
  const connect = await client.connect();
  const db = connect.db("onito");
  const collection = db.collection("customer-details");
  let result = collection.insertOne(req.body);
  res.send(result);
});

app.get("/users", async (req, res) => {
  const connect = await client.connect();
  const db = connect.db("onito");
  const collection = db.collection("customer-details");
  let result = await collection.find().toArray();
  // res.send(result);
  res.render("index", { result });
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
