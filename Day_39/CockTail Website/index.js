import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res)=>{
    try{

      const result = await axios.get(url);
      const instructions = result.data.drinks[0].strInstructions;
      const name = result.data.drinks[0].strDrink;
      const image = result.data.drinks[0].strDrinkThumb;
      res.render('index.ejs', {instruction:instructions,  cocktail_name: name, cocktail_image:image});  
    } catch(error){
        res.status(500).send(error.message)
    } 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
