const express = require('express');
const router = express.Router();

const newsletterController = require('../controllers/newsletterController');

router.get('/', newsletterController.getIndex);

router.post('/', newsletterController.new);

module.exports = router;