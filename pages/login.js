const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginbutton = page.locator('//span[text()="Einloggen"]');
        this.email = page.locator('//input[@placeholder="E-Mail-Adresse"]');
        this.password = page.locator('//input[@type="password"]');
        this.clickfurther = page.locator('//button[text()="Weiter"]');
        this.emailError = page.locator('//div[text()="Ungültige E-Mail-Adresse."]');
        this.passError = page.locator('//p[text()="Die angegebenen Login-Daten sind nicht korrekt!"]');
    }

    async gotoremindme(){
        const { baseURL } = this.page.context()._options;
        await this.page.goto(`${baseURL}`);
        
    }

    async userLogin(Email, Password){
        await this.loginbutton.click();
        await this.email.fill(Email);
        await this.password.fill(Password);
        await this.loginbutton.click();
        //await expect(this.myaccount).toBeVisible();
    }

    async emailValidation(invalidEmail){
        await this.loginbutton.click();
        await this.email.fill(invalidEmail);
        await expect(this.emailError).toBeVisible();
    }
    async passwordValidation(Email, invalidPass){
        await this.loginbutton.click();
        await this.email.fill(Email);
        await this.password.fill(invalidPass);
        await expect(this.passError).toBeVisible();
    }


}