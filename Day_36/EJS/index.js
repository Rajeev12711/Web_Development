import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    const d = new Date();
    const type = d.getDay();
    let weekday = "";
    let advice ="";
    if (type ===  0 || type ==6){
        weekday = "weekend",
        advice = "it's time to have some fun!";
    }else{
        weekday = "weekday",
        advice = "it's time to work hard!";
    };
    res.render("index.ejs", {
        datetype: weekday,
        adv : advice
    })
});

app.listen(port, ()=> {
    console.log(`Listening on ${port}`);
});