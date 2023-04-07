const loginAndGoToPage = require('./loginAndGoPage');

const main = async () => {
    const page = await loginAndGoToPage();
    await page.waitForSelector("#view_next_day_msg");
    await page.$$("table > tbody > tr").then(async(trs) => {
        console.log(trs[0].href);
    })
    // .then(async(firstTR) => {
    //     return page.$eval(firstTR, el => {
    //         return {href: el.href, val: el.textContent};
    //     })  
    // }).then(async({href, val}) => {
    //     console.log('new normal1553Href:', href, val)
    // })
    
    const normal1553Href = await page.$eval("table > tbody > tr > td:nth-child(4) > a", async(el) => {
        return await {href: el.href, val: el.textContent};
    }).then(({href, val}) => {
        if(href === 'javascript:void(0);') {
            console.log('normal1553Href:', href, val)
        } else {
            console.log('normal1553Href:', href, val)
        }
    });
    
    // const normal1706Href = await page.$eval("table > tbody > tr:nth-child(3) > td:nth-child(4) > a", async(el) => {
    //     return await {href: el.href, val: el.textContent};
    // }).then(({href, val}) => {
    //     console.log('normal1706Href:', href, val)
    //     return href
    // });
    
}

main();