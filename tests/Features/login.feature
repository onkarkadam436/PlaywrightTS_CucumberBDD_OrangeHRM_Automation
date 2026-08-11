Feature: OrangeHRM Login

  Background:
    Given I am on the OrangeHRM login page

  @valid
  Scenario: Login with valid credentials
    When I enter username "Admin"
    And I enter password "admin123"
    And I click on the Login button
    Then I should see the Dashboard page

  @invalid
  Scenario: Login with invalid credentials
    When I enter username "Admin"
    And I enter password "wrongPassword"
    And I click on the Login button
    Then I should see the error message "Invalid credentials"