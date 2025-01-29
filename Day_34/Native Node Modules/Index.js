const fs = require("fs")

fs.writeFile("message.txt", "Hello, Native Node Modules", (err) => {
  if (err) throw err;
  console.log("The file has been Saved!.");
});


// To delete file in node js

// fs.unlink("./message.txt",(err)=>{
//   if(err) throw err;
//   console.log("file is deleted");
// // })
fs.appendFile("message.txt",`\n Hello from Rajeev`,(err)=>{
  if(err) throw err;
  console.log("File appended")
});

// fs.readFile("message.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
 