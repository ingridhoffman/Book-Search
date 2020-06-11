// Global
const router = require("express").Router();
const axios = require("axios");

// Variables
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const apiKey = process.env.API_KEY;
const KEY = "&key=" + apiKey;

// Google API
router.route("/").get((query) => {
	console.log("url: ", BASEURL + query + KEY);
	axios.get(BASEURL + query + KEY).then((results) => console.log(results));
});

module.exports = router;
