import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.put("/user/rajeev", (req, res) =>{
    res.sendStatus(200);
});

app.post("/register", (req, res) =>{
    res.sendStatus(201);
});

app.patch("/user/rajeev", (req, res) =>{
    res.sendStatus(200);
});

app.delete("/user/rajeev", (req, res) =>{
    res.sendStatus(200);
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`);
});