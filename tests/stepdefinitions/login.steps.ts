import {Given, When, Then} from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { page }from '../support/hooks';

let loginPage: LoginPage;

/*======================================================
Launch the OrangeHRM login page
=======================================================*/
Given(
    'I am on the OrangeHRM login page',
    async function () {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
    }
);

/*======================================================
Reusable steps for entering username, password, clicking login button, and verifying dashboard page or error message
=======================================================*/  
Given(
    'I enter username {string} and password {string}',
    async function (username: string, password: string) {
        await loginPage.login(username, password);
    }); 
    
    
    /*======================================================
    Login validation scenatrios
    =======================================================*/       
When(
    'I enter username {string}',
    async function (username: string) {
        await loginPage.enterUsername(username);
    });
        
When(
    'I enter password {string}',
    async function (password: string) {
        await loginPage.enterPassword(password);
    });
        
When(
    'I click on the Login button',
    async function () {
        await loginPage.clickLogin();
    });

Then(
    'I should see the Dashboard page',
    async function () {
        await loginPage.verifyDashboardPage();
    });

Then(
    'I should see the error message {string}',
    async function (message: string) {
        await loginPage.verifyInvalidCredentialsErrorMessage(message);
    });