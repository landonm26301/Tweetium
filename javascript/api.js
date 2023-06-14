/////////////////////////////////////////////////////////////////////
// Tweetium-v.1.0.0_EXPIRIMENTAIL! build        by: landon metzger //
/////////////////////////////////////////////////////////////////////

// dependents / requirements
const { Builder, Browser, By, Key, until } = require("selenium-webdriver"); // Seliem Webdriver
const firefox = require("selenium-webdriver/firefox"); // fierfox browser web engine
const delay = require("delay"); // delay for async
const term = require("terminal-kit").terminal; // Terminal kit
const path = require("path");

// Build the driver
var driver;

// Global element variables
var body;
var imgUppload;

// MAKE SURE TO CALL THIS BEFORE YOU DO ANYTHING!!!!
modual.exports = class instence {
  constructor(cookie){
    this.cookie = cookie;
    INIT(this.cookie);
  }
  async SendMessage(){
    
  }
};


exports.INIT = async function (cookiesFile) {
  await term.clear();
  // Lode the page
  await term.bgWhite(" * ");
  term.bgBlue("Loading twitter\n");
  await driver.get("https://twitter.com/home");
  await addCookies(cookiesFile);
  await driver.get("https://twitter.com/home");
  await loadElms("*"); // get elements classes after loading the page
  await term.clear();
  await term.bgWhite(" * ");
  term.bgBlue("Success\n");
};

////////////// Dinamic messaging System //////////////

// Create new message draft
// \/ Do this before adding any new text elements or imiges
exports.NewMsg = async function () {
  await term("\n");
  await term.yellow("[New Mesege!] ");
  term.gray("Adding content:" + "\n");
  await delay(100);
  await body.sendKeys("n");
  await delay(200);
  await loadElms("*");
};

// Add text to the curent draft
// \/ Only do this after a draft has been created!!
exports.addText = async function (message) {
  await delay(300);
  await term.yellow("[Adding!] ");
  term.gray("Text:" + message + "\n");
  await delay(100);
  await body.sendKeys(message);
};

// Add Imge to the curent draft
// \/ Only do this after a draft has been created!!
exports.addImg = async function (root, Filepath) {
  await delay(300);
  await loadElms("img");
  await delay(100);
  await term.yellow("[Adding!] ");
  term.gray("Imige:" + Filepath + "\n");
  await delay(100);
  await imgUppload.sendKeys(path.join(root, Filepath));
};

// Send the final draft
// \/ Make sure that the file has been all the way uploaded before calling
exports.SendMsg = async function () {
  await delay(300);
  await body.sendKeys(Key.CONTROL, Key.ENTER);
};

//////////////////////////////////////////////////////
////////////// Genaric mesaging systems //////////////

// Send a post using the web driver
// please try to send messages with a delay. Remember this bot is actually typing your message
exports.SendMessage = async function (message) {
  await term("\n");
  await term.yellow("[Text!] ");
  term.gray(message + "\n");
  await delay(500);
  await body.sendKeys("n");
  await delay(300);
  await body.sendKeys(message);
  await delay(300);
  await body.sendKeys(Key.CONTROL, Key.ENTER);
};

// Send a post with an imige and optonal text
// This is an experemental feature !!!There might be bugs and this might not work proporly!!!
exports.SendImige = async function (root, Filepath) {
  finalpath = path.join(root, Filepath);
  await term("\n");
  await term.yellow("[Imige!] ");
  term.gray(Filepath + "\n");
  await delay(100);
  await body.sendKeys("n");
  await delay(200);
  await loadElms("img");
  await delay(100);
  await imgUppload.sendKeys(finalpath);
  await delay(2000); // this should long enough to load the imige
  await body.sendKeys(Key.CONTROL, Key.ENTER);
};

//////////////////////////////////////////////////////

// Non interactible functions pleas ignore theas //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// \/ Refresh element selectors.
async function loadElms(elm) {
  if (elm == "*") {
    body = await driver.findElement(By.xpath("(//body)[1]"));
  } else if (elm == "img") {
    imgUppload = await driver.findElement(
      By.xpath(
        "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/input[1]"
      )
    );
  }
}
// \/ Remove Turn on notification if it is a thing

// \/ add cookies function
async function Login() {
  await driver
    .manage()
    .getCookies()
    .then(function (cookies) {
      if (!cookies) {
        DoLogin();
      }
    });
}

async function DoLogin() {
  await driver;
}
