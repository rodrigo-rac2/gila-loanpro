let loginPage = require('../pages/login.po.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
const {When, Then} = require("cucumber");
const {element, By} = require("protractor");
chai.use(chaiAsPromised);
let expect = chai.expect;

Before(function(){
    loginPage.init();
})

Given('I visit {string}', async function (page) {
    loginPage.get(page);
    expect(await loginPage.isUsernameInputPresent()).to.be.true;
    expect(await loginPage.isPasswordInputPresent()).to.be.true;
    expect(await loginPage.isLoginButtonPresent()).to.be.true;
});

When('I enter my credentials: username {string} and password {string}', function (username, password) {
    loginPage.setCredentials(username, password);
});

When('I click the login button', function () {
    loginPage.clickLoginButton();
});

Then(/^the home screen is displayed$/, function () {

});
