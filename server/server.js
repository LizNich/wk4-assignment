// Set up Nodes
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// Set up Server
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Set up DB connection
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// TEST - endpoint
//app.get("/", (request, response) => response.json("wow - this is working!"));

// POST endpoint / make a query to the DB / send back resp
app.post("/messages", async function (request, response) {
  const { message, username } = request.body;
  const result = await db.query(
    "INSERT INTO messages (name, message) VALUES ($1, $2)",
    [user, message]
  );
  response.json(result);
});

app.listen(8080, () => console.log("Running on PORT 8080"));
