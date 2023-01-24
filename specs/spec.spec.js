let specPage = require('../pages/spec.po.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
const {When, Then} = require("cucumber");
chai.use(chaiAsPromised);
let expect = chai.expect;

Before(function(){
    specPage.init();
})

Given('I visit {string}', function (page) {
    specPage.get(page);
});

When('I enter my credentials: username {string} and password {string}', function (username, password) {
    specPage.setCredentials(username, password);
});

When('I click the login button', function () {
    specPage.clickLoginButton();
});

Then(/^the home screen is displayed$/, function () {

});
