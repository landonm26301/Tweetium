const twitter = require('./api.js');

dothedew();

async function dothedew()
{
    await twitter.INIT('', '--headless'); // your twiters acount auth token here | find it by going into inspect element and going into cookies.
                                          // change headless to --head to see the browser For Debuging.
    await twitter.SendMessage('Hello world!');
}