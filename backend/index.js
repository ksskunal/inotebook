const connectToMongo = require("./db");
const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.urlencoded({ extended: false }));
connectToMongo();
const session = require("express-session");

const port = 5000;
app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors())
app.use(express.json());
app.use("/api/auth", require("./routers/auth"));
app.use("/api/notes", require("./routers/notes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`);
});
