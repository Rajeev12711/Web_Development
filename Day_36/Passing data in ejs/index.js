import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extend: true}));

app.get("/", (req, res)  =>{
    res.render("index.ejs");
});

app.post("/submit", (req, res) =>{
    const constnumber = req.body["fname"].length + req.body["lname"].length;
    res.render("index.ejs", {lengthtnumber : constnumber});
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}.`);
});