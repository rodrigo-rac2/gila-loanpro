Feature: Login test
  Scenario: Enter credentials and login
    Given I visit "https://beta-loanpro.simnang.com/client/app/login.html?"
    When I enter my credentials: username "loanproqaautomatedapitesting+atestpractice@gmail.com" and password "%Wd5u50Q1?121"
    And I click the login button
    Then the home screen is displayed