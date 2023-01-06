const functions = require('@google-cloud/functions-framework');
const {scraper} = require("src/amazon-scraper.js");

functions.http('price_scrapper', (req, res) => {
    console.log("price_scrapper invoked");
    res.send(`Hello ${req.query.name || req.body.name || 'World'}!`);
});
