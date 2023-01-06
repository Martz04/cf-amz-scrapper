const axios = require("axios");
const cheerio = require("cheerio");

const get_html_page = async (page) => {
    const source_page = await axios.get(page);
    return source_page.data;
};

const scrape = (page_data, selector) => {
    const $ = cheerio.load(page_data);
    return $(selector);
};

module.exports = {
    scrape,
    get_html_page
}