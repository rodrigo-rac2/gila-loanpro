# Gila-loanpro e2e tests with Protractor and Cucumber
This project is setup with protractor and protractor-cucumber-framework.

# Local installation
To install it locally, simply clone or fork the repository and run:

`npm install`

Then run the tests with:

`npm run test`

If you get any webdriver-related issues, try running a webdriver update with:

`./node-modules/protractor/bin/webdriver-manager update`

and retry running the tests

# Global installation

You can also install protractor globally, and your own selenium middleware:

`npm install -g protractor`

`webdriver-manager update`

At this point, feel free to edit `protractor.conf.js`, and comment/delete line `7`, which reads `directconnect: true`

Run your webdriver instance:

`webdriver-manager start`

Then run the tests from the project's root:

`protractor protractor.conf.js`

# Requirements:
- Node 14 or above
- This project was designed and tested on a Macbook M1. 
- It currently supports a Chromium/Chrome browser v. 108/109/110
- If you're using a different OS/browser, download your driver and add it to the project's root. After that, edit 
`protractor.conf.js`, replacing the browser option in line `10` with the browser of your choice (in case it's not chrome).
