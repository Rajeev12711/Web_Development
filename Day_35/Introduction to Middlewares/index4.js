import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) =>{
  res.sendFile(req.index.html);
});
app.post("submit/", (req, res) =>{
  res.send("<h1>Your band name is:</h1>");
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
