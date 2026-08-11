const express = require('express');
const shortid = require("shortid");
const Url = require("../models/Url.model")

const shortenUrl = async(req, res) => {
 try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    // Check if already exists
    let existing = await Url.findOne({ originalUrl });

    if (existing) {
      return res.json({
        success: true,
        shortUrl: `${process.env.BASE_URL}/${existing.shortCode}`,
      });
    }

    // const shortCode = shortid.generate();
    const shortCode = shortid.generate()

    const newUrl = await Url.create({
      originalUrl,
      shortCode,
    });

    res.status(201).json({
      success: true,
      shortUrl: `${process.env.BASE_URL}/${newUrl.shortCode}`,
    });
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}


const shortCode = async(req, res) => {
    try {
    const url = await Url.findOne({
      shortCode: req.params.shortCode,
    });

    if (!url) {
      return res.status(404).send({
        status: false,
        message: "URL not found"
    });
    }

    // res.redirect(url.originalUrl);
    res.status(201).json({
      success: true,
      // shortUrl: `${process.env.BASE_URL}/${newUrl.shortCode}`,
      url
    });

  } catch (err) {
    res.status(500).send(err.message);
  }

}

module.exports =
   { 
    shortenUrl,
    shortCode
}