import{expect, Page} from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    private txtUsername = this.page.locator('input[name="username"]');
    private txtPassword = this.page.locator('input[name="password"]');
    private btnLogin = this.page.getByRole('button', { name: 'Login' });
    private errorMessage = this.page.locator('.oxd-alert-content-text');
    

    async navigateToLoginPage() {

        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'networkidle',
            timeout: 10000
        }
    );

        await this.txtUsername.waitFor({ 
            state: 'visible', 
            timeout: 5000 
        }
    );
}

async enterUsername(username: string) {
    await this.txtUsername.fill(username);
}

async enterPassword(password: string) {
    await this.txtPassword.fill(password);
}   

async clickLogin() {
    await this.btnLogin.click();
}  

/*
*** Reusable login method
*** Used by Background step in feature file
*/
async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
}

async verifyDashboardPage() {
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
        {
            timeout: 10000
        });
    }


    async verifyInvalidCredentialsErrorMessage(message: string) {
        await this.page.waitForTimeout(10000);   
        await expect(this.errorMessage).toContainText(message);
    }

}