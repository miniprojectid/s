const puppeteer = require('puppeteer');

async function startBrowser(){
    let browser;
    try{
        console.log("Opening the browser........");
        browser = await puppeteer.launch({
            headless : "new",
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPErrors': true 
        })
    } catch(err){
        console.log("Could not create a browser instance => : ", err);
        return err
    }
    return browser;
}

module.exports = {
    startBrowser
}