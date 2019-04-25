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
      // slowMo: 250,
      // devtools: true
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
  let page = scope.context.currentPage;
  const buttonSelector = '.nav-add-note';
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

module.exports = { openHomePage, clickButton,checkNoteCount };
