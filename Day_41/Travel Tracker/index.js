import express from "express";
import bodyParser from "body-parser";
import pg, { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config()


const db = new pg.Client({
  user : "postgres",
  host:"localhost",
  database:process.env.DATA,
  password:String(process.env.PASSWORD),
  port:Number(process.env.PORT)
});


const app = express();
const port = 3000;


db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);
  res.render("index.ejs", { countries: countries, total: countries.length });
});

  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
