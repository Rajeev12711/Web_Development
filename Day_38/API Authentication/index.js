import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "Anurag262002";
const yourPassword = "Anurag@262002.";
const yourAPIKey = "865e74b5-5152-4f64-ba93-c48a07e810eb";
const yourBearerToken = "50bb53eb-daf1-492c-aa02-24974ca895f3";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + `random`);
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {content: `Error: ${error.message}`});
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL+`all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const result = JSON.stringify(response.data, null, 2);
    res.render("index.ejs", { content: result});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {content: `Error: ${error.message}`});
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(API_URL+`filter?score=5&apiKey=${yourAPIKey}`, 
      // {
      // params:{
      //   score:2,
      //   apiKey: yourAPIKey,
      // }
      // }
    );
    const result = JSON.stringify(response.data, null, 2);
    res.render("index.ejs", { content: result});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {content: `Error: ${error.message}`});
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(API_URL+`secrets/42`, {headers: { 
      Authorization: `Bearer ${yourBearerToken}`} 
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {content: `Error: ${error.message}`});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
