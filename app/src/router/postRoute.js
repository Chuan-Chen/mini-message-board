const express = require('express');
const router = express.Router();

const postController = require('../controller/postController.js')

router.get('/new', postController.newPost)
router.get('/', postController.getPost);

module.exports = router;