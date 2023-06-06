
/////////////////////////////////////////////////////////////////////
// Tweetium-v.1.0.0_EXPIRIMENTAIL! build        by: landon metzger //
/////////////////////////////////////////////////////////////////////


// dependinsets / requierments
const {Builder, Browser, By, Key, options, until} = require('selenium-webdriver');     // Seliem Webdriver
const firefox = require('selenium-webdriver/firefox');      // fierfox browser ewb engine
const delay = require('delay');   // delay for async
const term = require('terminal-kit').terminal;    // Terminal kit


// Build the driver
driver = new Builder()
      .forBrowser(Browser.FIREFOX)
      .build();

// Global element varieables
var body;
var IMGButton;
var buttonRow;


// MAKE SHURE TO CALL THIS BEFORE YOU DO ANYTHING!!!!
exports.INIT = async function (auth_token)
{
  await term.clear();
  // Loade the page
  await term.bgWhite(' * '); term.bgBlue('Loading twitter\n');
  await driver.get('https://twitter.com/home');
  await driver.manage().addCookie({ name: 'auth_token', value: auth_token });
  await driver.get('https://twitter.com/home');
  await loadElms(); // get elements classes after loading the page
  await term.clear(); 
  await term.bgWhite(' * '); term.bgBlue('Success\n');
}

// Send a post using the web driver
    // please try to send messeges with a delay. Remenber this bot is actuly typing your messege
exports.SendMesege = async function (messege)
{
  await term("\n");
  await term.yellow("[Sending!] "); term.gray(messege + "\n");
  await delay(500);
  await body.sendKeys('n');
  await delay(300);
  await body.sendKeys(messege);
  await delay(300);
  await body.sendKeys(Key.CONTROL, Key.ENTER);
}

// Send an imige
    // path is the file path from our root directory to the imige file.
    // If you are using an api pass in the url instead
exports.SendImige = async function (Path)
{
  var outpath = 'C:/Users/lando/OneDrive/Documents/1.projects/1. Node/Twiterium/Twiterium-v.1.0.0_EXPIRIMENTAIL!' + Path;
  await delay(300);
  await body.sendKeys('n');
  await delay(500); 
  await IMGButton.sendKeys(outpath);
  await delay(500);
  await body.sendKeys(Key.CONTROL, Key.ENTER);
}



// Non interactible functions pleas ignore theas //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // \/ Load elements in the page and get thair class name and what not | 
async function loadElms()
{
  body = await driver.findElement(By.tagName('body'));
  buttonRow = await driver.findElement(By.className('r-1s2bzr4'));
  IMGButton =  await buttonRow.findElement(By.css("[role=button]"));
} 