const expect = require('chai').expect;
const { scrape, get_html_page } = require("../src/amazon-scraper.js");
describe("Testing Scrape function", ()=> {
    it("should download page data", async  ()=> {
        const url = "https://www.lipsum.com/";
        const page_data = await get_html_page(url);
        expect(page_data).not.null;
    })

    it("Should return price", async ()=> {
        const page_data = `
            <ul class="fruits">
              <li class="fruits__mango"> Mango </li>
              <li class="fruits__apple"> Apple </li>
            </ul>
            `;
        const selector = ".fruits__mango";
        const field = scrape(page_data, selector);
        expect(field.html().trim().toLowerCase()).to.equal("mango");
    })
})