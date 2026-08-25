import { test, expect } from '@playwright/test';

test('Problem user sees the same image for all products', async ({ page }) => {
    
    await page.goto('https://www.saucedemo.com/inventory.html');
    const imageSources = await page
        .locator('.inventory_item_img img')
        .evaluateAll(images =>
            images.map(image => image.getAttribute('src'))
        );
        console.log(imageSources);
      
   expect(imageSources).toHaveLength(6);
    expect(new Set(imageSources).size).toBe(6);
});