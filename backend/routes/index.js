const express = require('express');
const router = express.Router();
const postRoutes = require('./postRoutes');

router.use('/', postRoutes);

module.exports = router;
