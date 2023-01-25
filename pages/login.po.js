const {By, element} = require("protractor");
let nameInput,
    passwordInput,
    loginButton;

module.exports = {
    init: () => {
        nameInput = element(by.name('username'));
        passwordInput = element(by.id('password'));
        loginButton = element(By.xpath('//*[@id="loginAngCtrl"]/div[2]/div/div[4]/form/div[3]/button'));
    },
    get: (string) => {
        return browser.get(string);
    },
    setCredentials: (username, password) => {
        nameInput.sendKeys(username);
        passwordInput.sendKeys(password);
        return;
    },
    clickLoginButton: () => {
        return loginButton.click();
    },
    isUsernameInputPresent: () => {
        return nameInput.isPresent();
    },
    isPasswordInputPresent: () => {
        return passwordInput.isPresent();
    },
    isLoginButtonPresent: () => {
        return loginButton.isPresent();
    },
}
