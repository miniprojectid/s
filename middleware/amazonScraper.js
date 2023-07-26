const amazonObject = {
    url : 'https://www.amazon.in/',
    async scraper(browser, searchQuery='nothing'){ 
    try{
          searchQuery = searchQuery.replace(/ /g,"+");
          console.log("creating new page")
          let page = await browser.newPage();
          console.log(`Navigating to ${this.url}s?k=${searchQuery}`);
          await page.goto(this.url+`s?k=${searchQuery}`, { waitUntil: 'load' });
          productDetails=await page.content();
          await page.close();
          return productDetails;
        } catch (error) {
          console.error('Error occurred:', error);
          return error.message
      }     
    }
}

module.exports = amazonObject;