const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.getPosts);

router.get('/:id', postController.getPost);

router.post('/new', postController.new);

module.exports = router;

