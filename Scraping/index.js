const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function scrap(){
const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.setViewport({width:1280,height:720});

await page.goto('https://www.imdb.com/search/title/?title_type=feature&genres=horror');

await page.screenshot({ path: 'horror.jpg'});
browser.close();

}

async function imdb_horror(){
    //const starttime = new Date();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    

    await page.goto('https://www.imdb.com/search/title/?title_type=feature&genres=horror');




    // const element = await page.waitForSelector('div > .lister-item-content');

    const names = await page.evaluate(() =>{
       return Array.from(document.querySelectorAll(".lister-item-content .lister-item-header")).map(x=>x.textContent)
    })

    console.log(typeof(names));

    await fs.writeFile("horror.txt", names.join("\r\n"));

    // script.js


   // console.log(names);
  //const endtime = new Date();
  //const duration = endtime - starttime;

       // console.log(`HTML file generated successfully in ${duration} ms. Check output.html.`);

    await browser.close();

}


async function imdb_romance(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    

    await page.goto('https://www.imdb.com/search/title/?title_type=feature&genres=romance');




    // const element = await page.waitForSelector('div > .lister-item-content');

    const names = await page.evaluate(() =>{
       return Array.from(document.querySelectorAll(".lister-item-content .lister-item-header")).map(x=>x.textContent)
    })

    await fs.writeFile("romance.txt", names.join("\r\n"));
   // console.log(names);
    await browser.close();

}
async function imdb_action(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    

    await page.goto('https://www.imdb.com/search/title/?title_type=feature&genres=action');




    // const element = await page.waitForSelector('div > .lister-item-content');

    const names = await page.evaluate(() =>{
       return Array.from(document.querySelectorAll(".lister-item-content .lister-item-header")).map(x=>x.textContent)
    })

    await fs.writeFile("action.txt", names.join("\r\n"));
    //console.log(names);
    await browser.close();

}
console.time();
 
imdb_horror();
//console.timeEnd();
imdb_romance();
imdb_action();


scrap();
console.timeEnd();
