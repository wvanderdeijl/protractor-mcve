Protractor MVCE
===

> When asking a question about a problem caused by your code, you will get much better answers if you provide code people can use to reproduce the problem. That code should be…
>    …Minimal – Use as little code as possible that still produces the same problem
>    …Complete – Provide all parts needed to reproduce the problem
>    …Verifiable – Test the code you're about to provide to make sure it reproduces the problem


[From Stackoverflow's MVCE write up](https://stackoverflow.com/help/mcve)


Usage
---

1. Fork the repo
2. Instal dependencies `npm i && ./node_modules/.bin/webdriver-manager update`
2. Edit the config and example spec to reproduce your issue
3. Run the specs and make sure they fail `./node_modules/.bin/protractor conf.js`
3. Link to your fork in a Protractor issue

If you need to do something on the client; please use `docs/index.html` file to add client side JS

Goal
---

This repository exists to help you quickly create an MVCE for easier debugging with Protractor and for posting in the protractor issue queue.


Contributions
---

This is _very_ simple. If there's a way to make it easier for others to use please create a pull request. Thanks!
