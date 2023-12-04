import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import userData from '../util/userdata.json';
import { getRandomEmail } from '../util/common';


test.describe(' Login Sceanrio', () => {
    test(' Verify if User has valid email and password', async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.gotoremindme();
        await Login.userLogin(userData.Email,userData.Password)
    });

    test(' Verify if User has invalid email', async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.gotoremindme();
        await Login.gotoremindme();
        await Login.emailValidation(userData.invalidEmail);
    });

    test(' Verify if User has invalid pass', async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.gotoremindme();
        await Login.passwordValidation(userData.Email,userData.invalidPass);
    });
});
