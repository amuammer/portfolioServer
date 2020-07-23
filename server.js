const express = require("express");
const app = express();


app.use(express.static('./public')); //Serves resources from public folder

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server started - ${port}`);
});
