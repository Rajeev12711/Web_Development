import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:process.env.DATA,
  password:String(process.env.PASSWORD),
  port:Number(process.env.PORT),

});

db.connect();

let quiz=[];
let totalCorrect = 0;
let currentQuestion = {};


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  }
});

app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", 
    {question: currentQuestion,
      wasCorrect: null,
      totalScore: totalCorrect,
    });
});


app.post("/submit", (req, res) => {
  const answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion?.country?.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  if (!isCorrect) {
 
    return res.render("index.ejs", {
      question: currentQuestion,
      wasCorrect: false,
      totalScore: totalCorrect,
    });
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: true,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = Math.floor(Math.random() * quiz.length);
  currentQuestion = quiz[randomCountry];
}
