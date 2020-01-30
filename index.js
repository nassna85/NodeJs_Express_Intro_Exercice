const express = require("express");
const app = express();

const con = require('./config/database');

//const router = express.Router();
const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');
const newsletterRouter = require('./routes/newsletter');

app.use((req, res, next) => {
  req.con = con;
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", indexRouter);
app.use("/posts", postRouter);
app.use("/newsletter", newsletterRouter);

//Run Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
