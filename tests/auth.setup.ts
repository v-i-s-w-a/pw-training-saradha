import {test as setup,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

setup('Authenticate Standard User', async ({ page }) => {

const authFile = '.auth/user.json';
    //const username = process.env.USERNAME;
    const username = "standard_user";
    const password = "secret_sauce";
    const login = new LoginPage(page);
    await login.navigateTo();
    await login.login(username as string, password as string);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.context().storageState({ path: authFile });
    console.log('Authentication successful. Storage state saved to', authFile);

});

setup('Authenticate problem user', async ({ page }) => {
    const problemAuthFile = '.auth/problemUser.json';
    const problem_username = "problem_user";
    const password = "secret_sauce";
    const login = new LoginPage(page);
    await login.navigateTo();
    await login.login(problem_username as string, password as string);
    await expect(page).toHaveURL(
        'https://www.saucedemo.com/inventory.html'
    );
    await page.context().storageState({
        path: problemAuthFile
    });
    console.log('Authentication successful. Storage state saved to', problemAuthFile);
});
