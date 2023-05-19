
# Twiterium

 A free twiter api paywall work around for node.js



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)



## Installation

Install with npm

```bash
  npm install Twiterium
```
    
## Usage/Examples

```javascript
const twitter = require('./api.js');
    // your twiters acount auth token here 
    // change headless to --head to see the browser 
    await twitter.INIT('', '--headless'); 
    
    await twitter.SendMessage('Hello world!');
```

## Roadmap

- Add Imige support.
- Add meseging in threads. 
- Additional browser support.

## Feedback

If you have any feedback, please reach out to Me at ttvparadoxg@gmail.com.

