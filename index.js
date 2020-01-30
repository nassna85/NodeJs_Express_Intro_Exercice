const express = require("express");
const app = express();

const con = require('./config/database');

const router = express.Router();
const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');

app.use((req, res, next) => {
  req.con = con;
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", indexRouter);
app.use("/posts", postRouter);

//Array myPosts
const myPosts = [
  {
    id: 1,
    title: "My title 1",
    content: "My content 1"
  },
  {
    id: 2,
    title: "My title 2",
    content: "My content 2"
  },
  {
    id: 3,
    title: "My title 3",
    content: "My content 3"
  }
];

// Route / => GET
router.get("/", (req, res) => {
  res.send("<h1>Some Title</h1><a href=”/newsletter”>Newsletter</a>");
});

// Route /newsletter => GET
router.get("/newsletter", (req, res) => {
  res.send(
    '<form action="/newsletter" method="post"><input type="email" name="email"><input type="submit"></form>'
  );
});

// Route /newsletter => POST
router.post("/newsletter", (req, res) => {
  const email = req.body.email;
  res.json({ status: 200, email });
});

//Route /posts => GET
/*
router.get("/posts", (req, res) => {
  res.json(myPosts);
});
*/

//Route /posts/:id => GET
router.get("/posts/:id", (req, res) => {
  const id = req.params.id - 1; // => -1 because it's a array and the first element begin with number 0
  if (!myPosts[id]) {
    res.status(404).json({ error: "Post not found" });
  } else {
    res.json({ post: myPosts[id] });
  }
});

//Route /posts/new => POST
router.post("/posts/new", (req, res) => {
  if (req.body.title === "" || req.body.content === "") {
    res.status(400).json({ error: "Posts must have title and content" });
  } else {
    res.json({ post: req.body });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
