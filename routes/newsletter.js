const express = require('express');
const router = express.Router();

const newsletterController = require('../controllers/newsletterController');

router.get('/', newsletterController.getIndex);

module.exports = router;