import exprees from "express";
const app = exprees();

app.get("/", (req, res) =>{
    res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res) =>{
    res.send("<h1>About</h1><p>I Am Rajeev Gupta. I want to become developer");
});

app.get("/Contact", (req, res) =>{
    res.send("<h1>Contact Info</h1><p>Gmail:  Rajeevgupta3317@gmail.com</p>");
});

app.listen(3000, () =>{
    console.log("Server runnig on port 3000.");
});