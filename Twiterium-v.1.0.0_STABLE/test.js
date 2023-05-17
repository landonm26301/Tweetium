const twitter = require('./api.js');
    // your twiters acount auth token here | find it by going into inspect element and find it in the cookies.
    await twitter.INIT('', '--headless'); 
    // change headless to --head to see the browser 
    await twitter.SendMessage('Hello world!');