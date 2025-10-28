// make new router
const express = require("express");
const router = express.Router();

// define data
var shopData = {shopName: "The Thirsty Student",
                productCategories: ["Beer", "Wine", "Hot Drinks"]
            };

// handle main routes
// TODO
router.get("/", (req, res) => {res.render("index.ejs", shopData)});
router.get("/about", (req, res) => {res.render("about.ejs")});
router.get("/search", (req, res) => {res.render("search.ejs")});

// export the router object so index.js can access it
module.exports = router;