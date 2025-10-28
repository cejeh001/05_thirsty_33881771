// make new router
const express = require("express");
const router = express.Router();

// define data
var shopData = {shopName: "The Thirsty Student",
                productCategories: ["Beer", "Wine", "Hot Drinks"]
            };

// handle main routes

router.get("/", (req, res) => {res.render("index.ejs", shopData)});
router.get("/about", (req, res) => {res.render("about.ejs")});
router.get("/search", (req, res) => {res.render("search.ejs")});
router.get("/register", (req,res) => {res.render("register.ejs",  shopData);}); 
router.post("/registered", (req,res) => { res.send(req.body)}); 


router.get("/search-result", (req, res) => { res.send(' Hello '+ req.body.first + ' '+ req.body.last +" you are now registered! We'll send you an email to you at " + req.body.email);}); 

// TODO: search in the database based on req.query.search_text and req.query.category
router.get("/search-result", (req, res) => { res.send("You searched for " + req.query.search_text + " in " + req.query.category);});

// export the router object so index.js can access it
module.exports = router;