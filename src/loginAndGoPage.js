const puppeteer = require('puppeteer');
require('dotenv').config();

const loginAndGoToPage = async () => {

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 500,
            height: 600
        },
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });
    
    const page = await browser.newPage();
    await page.goto('https://srtplay.com/user/login');
    await page.click('.btn_basic');
    await page.evaluate((id) => {
        document.querySelector('#login_email').value = id;
    }, process.env.ID);
    await page.click('.go_pass');
    await page.evaluate((pwd) => {
        document.querySelector('#pass-input').value = pwd;
    }, process.env.PASSWORD);
    await page.click('.pw_next_box > .btn_black');
    // await page.waitForNavigation();
    await page.goto('https://srtplay.com/etk/reservation/reserve_schedule_list?way=one&etkSale=N&dptRsStnCd=0509&arvRsStnCd=0551&s_dptDt=2023-04-09&s_dptTm=15&e_dptDt=&e_dptTm=&psgNum=&seatAttCd=&psgInfoPerPrnb1=1&psgInfoPerPrnb2=&psgInfoPerPrnb3=&psgInfoPerPrnb4=&psgInfoPerPrnb5=');
    
    return page;
}

module.exports = loginAndGoToPage;
