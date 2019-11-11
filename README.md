# Overview

This test suite uses the Webdriverio v5 framework together with the Cucumber framework and the Selenium-Standalone
service.

The tests are written in the BDD Gherkin style and held under the features directory. 
They are derived from the requirements in the acceptance-testing README


Install the weather acceptance app following the instruction in the [README](https://github.com/buildit/acceptance-testing)
and launch the app by opening a terminal and entering

`$ npm run develop`


## Installing the Test Suite

Clone the test suite, all supporting modules have been added to the package.json - run

`$ npm install`

## Running the Test Suite

A test script is set up in the package.json so the tests can be run on a Terminal opened in the Project root directory 
by typing

`$ npm run test`

The wdio.conf.js contains the browser capabilities, browsers can be switched by editing this file

```
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        //browserName: 'firefox',
    }],
```
 

Tested using 

* node v11.2.0
* npm  v6.13.0

Running: chrome 
* version: '78.0.3904.97',
* chromedriverVersion: '2.43.600229

Running: firefox  
* browserVersion: '70.0.1',
* geckodriverVersion': '0.23.0',

Platform Name Mac OS X
Platform version Darwin 17.7.0

# Issues

* Need to clarify the calculation of the "dominant" values, the app appears to use the first value 
from the source data

