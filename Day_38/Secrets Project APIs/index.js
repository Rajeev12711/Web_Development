import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import "dotenv/config"

const app = express();
const port = process.env.PORT;
const url = process.env.URL;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res)=>{
    try{
      const result = await axios.get(url);
      res.render("index.ejs", {secret : result.data.secret, user: result.data.username});  
    } catch(error){
        res.status(500)
    } 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
