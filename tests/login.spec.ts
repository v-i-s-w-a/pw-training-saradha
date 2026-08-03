import { test, expect } from '@playwright/test';
test('Invalid login', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder('Username').fill("locked_out_user");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button', { name: 'Login' }).click();
    const error_Message =await page.getByTestId('error')
    await expect(error_Message).toBeVisible();
})

