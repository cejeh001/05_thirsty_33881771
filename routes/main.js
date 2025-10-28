// make new router
const express = require("express");
const router = express.Router();

// handle main routes
// TODO
router.get("/", (req, res) => {res.render("index.ejs")});
router.get("/about", (req, res) => {res.render("about.ejs")});
router.get("/search", (req, res) => {res.render("search.ejs")});

// export the router object so index.js can access it
module.exports = router;