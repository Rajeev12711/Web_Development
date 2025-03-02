import express from "express";

const app = express();
const port = 3000;

function Weekday_warrior(){
    const d = new Date();
    const type = d.getDay();
    let hit ={}
    if (type ===  0 || type ==6){
        hit= {weekday : "weekend",
        advice : "it's time to have some fun!",}
    }else{
        hit={weekday : "weekday",
        advice : "it's time to work hard!"} 
    };
    return hit;

};

app.set(Weekday_warrior);

app.get("/", (req, res) =>{
    res.render("index.ejs", Weekday_warrior());
});

app.listen(port, ()=> {
    console.log(`Listening on ${port}`);
});