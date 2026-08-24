import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Invalid login', async ({ page }) => {
     const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText("Sorry");
})

