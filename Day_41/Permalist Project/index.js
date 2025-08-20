import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user : "postgres",
  host: "localhost",
  database: process.env.DATA,
  password: String(process.env.PASSWORD),
  port: Number(process.env.PORT)
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];


app.get("/", async (req, res) => {
  try{
    const result = await db.query("SELECT * FROM items ORDER BY due_date ASC");
    items = result.rows;

    res.render("index.ejs", {
    listTitle: "Works",
    listItems: items,
    });
  } catch(err) {
    console.log(err)
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  let date = req.body.newDate;

  if (!date) date = null;

  try {
    await db.query("INSERT INTO items (title, due_date) VALUES ($1, $2)", [item, date]);
    res.redirect("/");

  } catch(err){
    console.log(err)
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  let date = req.body.updateItemDate;
  const id = req.body.updatedItemId;

  if (!date) date = null;

  try {

    await db.query(
      "UPDATE items SET title = $1, due_date = $2 WHERE id = $3",
      [item, date, id]
    );
    res.redirect("/");

  } catch(err){
    console.log(err)
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try{
    await db.query("DELETE FROM items WHERE id = $1",[id]);
    res.redirect('/');
  } catch(err){
    console.log(err)
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
