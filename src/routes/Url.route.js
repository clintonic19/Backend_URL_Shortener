const express = require('express');
const router = express.Router();
const {shortenUrl, shortCode} = require('../controllers/UrlShortener.controller')

router.post("/shorten", shortenUrl,)
router.get("/:shortCode", shortCode)

module.exports = router;