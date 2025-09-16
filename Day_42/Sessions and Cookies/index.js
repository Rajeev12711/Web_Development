import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";


const db = new pg.Client({
  user:process.env.USER,
  host:process.env.HOST,
  database:process.env.DATA,
  password:String(process.env.PASSWORD),
  port:Number(process.env.PORT),
});
db.connect();


const app = express();
const port = 3000;
const saltRounds = 10;


app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    

  })
); 

app.use(passport.initialize());
app.use(passport.session());


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets", (req, res) => {
  req.isAuthenticated() ? res.render("secrets.ejs") : res.redirect("/login");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) returning *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            console.error(err);
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/secrets",
  failureRedirect: "/login",
})  );

passport.use(new Strategy(async function verify(username, password, cd) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, result) => {
          if (err) {
            return cd(err);
          } else {
            if (result) {
              return cd(null, user);
            } else {
              return cd(null, false);
            }
          }
        });
      } else {
        return cd("User not found");
      }
    } catch (err) {
      return cd(err);
    }
  }
));

passport.serializeUser(function (user, cd) {
  cd(null, user);
});

passport.deserializeUser(async function (user, cd) {  
  cd(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
