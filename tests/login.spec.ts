import {test, expect } from '../fixtures';
//import { LoginPage } from '../pages/LoginPage';

test.use({ storageState: { cookies: [] , origins: [] } });
test('User logs in', async ({ loginPage,page }) => {
    //const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce');
});

