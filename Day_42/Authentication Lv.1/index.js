import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const db = new pg.Client({
  user:process.env.USER,
  host:process.env.HOST,
  database:process.env.DATA,
  password:String(process.env.PASSWORD),
  port:Number(process.env.PORT),

});
db.connect();


app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);

    if (result.rows.length > 0) {
      return res.send("User already exists. Please login.");
    } else {
      await db.query(`INSERT INTO users (email, password) VALUES ($1, $2)`, [email, password]);
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.error(err);
    res.send("An error occurred. Please try again.");
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    if (result.rows.length === 1) {
      const user = result.rows[0];
      const storedPassword = user.password;

      if (storedPassword === password) {
        res.render("secrets.ejs");
      } else {
        res.send("Invalid credentials. Please try again.");
      }
    } else {
      res.send("Invalid credentials. Please try again.");
    }
  } catch (err) {
    console.error(err);
    res.send("An error occurred. Please try again.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
