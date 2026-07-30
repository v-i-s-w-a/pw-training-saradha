import{test,expect} from '@playwright/test';

test('Launch Application', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  console.log("The page is launched successfully");
  await expect(page).toHaveTitle("Swag Labs");
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});