express = require("express");
app = express();

app.get("/check", (req, res) => {
  res.send("listening 8000");
});

app.get("/calculator", (req, res) => {
  res.sendFile(
    "C:/Users/RM/OneDrive/Desktop/JavaScript_Practice/index.html",
    "/index.html"
  );
});

app.listen(8000, () => console.log("listening on port"));
