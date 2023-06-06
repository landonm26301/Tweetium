
/////////////////////////////////////////////////////////////////////
// Twiterium-v.1.0.0_EXPIRIMENTAIL! build       by: landon metzger //
/////////////////////////////////////////////////////////////////////


// dependents / requirements
const {Builder, Browser, By, Key, until} = require('selenium-webdriver');     // Seliem Webdriver
const firefox = require('selenium-webdriver/firefox');      // fierfox browser ewb engine
const delay = require('delay');   // delay for async
const term = require('terminal-kit').terminal;    // Terminal kit
let options = new firefox.Options();


// Build the driver
var driver;

// Global element variables
var body;

// MAKE SURE TO CALL THIS BEFORE YOU DO ANYTHING!!!!
exports.INIT = async function (auth_token, flag)
{
  if(flag == "--headless"){
    driver = new Builder()
      .forBrowser(Browser.FIREFOX)
      .setFirefoxOptions(options.addArguments('--headless'))
      .build();
  } else {
    driver = new Builder()
      .forBrowser(Browser.FIREFOX)
      .build();
  }
  await term.clear();
  // Lode the page
  await term.bgWhite(' * '); term.bgBlue('Loading twitter\n');
  await driver.get('https://twitter.com/home');
  await driver.manage().addCookie({ name: 'auth_token', value: auth_token });
  await driver.get('https://twitter.com/home');
  await loadElms(); // get elements classes after loading the page
  await term.clear(); 
  await term.bgWhite(' * '); term.bgBlue('Success\n');
}

// Send a post using the web driver
    // please try to send messages with a delay. Remember this bot is actually typing your message
exports.SendMessage = async function (message)
{
  await term("\n");
  await term.yellow("[Sending!] "); term.gray(message + "\n");
  await delay(500);
  await body.sendKeys('n');
  await delay(300);
  await body.sendKeys(message);
  await delay(300);
  await body.sendKeys(Key.CONTROL, Key.ENTER);
}


// Non interactible functions pleas ignore theas //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // \/ Load elements in the page and get thair class name and what not | 
  async function loadElms()
  {
    body = await driver.findElement(By.tagName('body'));
  } 