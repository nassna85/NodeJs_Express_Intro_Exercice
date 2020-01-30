const postModel = require('../models/postModel');

module.exports = {
    getPosts:(req, res) => {
        postModel.selectAll(req.con, (error, posts) => {
            if(error) throw error;
            res.json(posts);
        });
    },
    getPost: (req, res) => {
        const postId = req.params.id;
        postModel.selectById(req.con, postId, (error, post) => {
            if(error) throw error;
            res.json(post);
        });
    },
    new: (req, res) => {
        const title = req.body.title;
        const content = req.body.content;

        const post = {
            title:title,
            content:content
        };
        postModel.insert(req.con, post, (error, result) => {
            if (req.body.title === "" || req.body.content === "") {
                res.status(400).json({ error: "Posts must have title and content" });
              } else {
                res.json({ post: req.body });
              }
        })
    }
}