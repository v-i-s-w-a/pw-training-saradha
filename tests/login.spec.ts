import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test('User logs in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce');
});

