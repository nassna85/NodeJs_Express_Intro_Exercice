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
        })
    }
}