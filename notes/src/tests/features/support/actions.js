const expect = require("expect");
const scope = require("./scope");

/**
 * Returns puppeteer config for current env.
 *
 */
const isDebugging = () =>
  process.env.NODE_ENV === "debug"
    ? {
        headless: false,
        slowMo: 250,
        devtools: true
      }
    : {};

const openHomePage = async () => {
  // Launch the browser and a page while setting the viewing options.
  if (!scope.browser) scope.browser = await scope.driver.launch({
      // headless: false,
      // slowMo: 50,
      // devtools: false
    });
  scope.context.currentPage = await scope.browser.newPage();
  scope.context.currentPage.emulate({
    viewport: {
      width: 500,
      height: 2400
    },
    userAgent: ""
  });

  // Visit the homepage.
  const visit = await scope.context.currentPage.goto("http://localhost:3000");
  return visit;
};

const clickButton = async(button)=>{

  const vals = {
    "\"Add Note\"" : '.nav-add-note',
    "\"Delete Note\"" : '.nav-close-note'
  };


  let page = scope.context.currentPage;
  const buttonSelector = vals[button];

  await page.waitForSelector(buttonSelector);
  await page.click(buttonSelector);
}

const checkNoteCount = async (count) => {

  let page = scope.context.currentPage;
  let texts = await page.evaluate(() => {
      let data = [];
      let elements = document.getElementsByClassName('nav-note');
      for (var element of elements)
          data.push(element.textContent);
      return data;
  });

  expect(texts.length).toBe(count);
};

const editNote = async (msg,ind) =>{
  let page = scope.context.currentPage;
  let texts = await page.evaluate(() => {
      let data = [];
      let elements = document.getElementsByClassName('nav-note');
      for (var element of elements)
          data.push(element.id);
      return data;
  });
  expect(texts.length>0).toBe(true);

  const noteSelector = "#"+texts[ind-1];
  await page.waitForSelector(noteSelector);
  await page.click(noteSelector);
  await page.keyboard.type(msg);
  await page.click('.App');
}


const checkNote = async (ind,msg) =>{
  let page = scope.context.currentPage;
  let texts = await page.evaluate(() => {
      let data = [];
      let elements = document.getElementsByClassName('nav-note');
      for (var element of elements)
          data.push(element.id);
      return data;
  });
  expect(texts.length>0).toBe(true);

  const noteSelector = "#"+texts[ind-1] + "-msg";
  await page.waitForSelector(noteSelector);
  const vals = await page.$(noteSelector);

  const text = await page.evaluate(vals => vals.textContent, vals);

  expect(text).toBe(msg);
}



module.exports = { openHomePage, clickButton,checkNoteCount, editNote, checkNote };
