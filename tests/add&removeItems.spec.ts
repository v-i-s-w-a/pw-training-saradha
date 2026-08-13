import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('Add and Remove Items from Cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toContain('/inventory.html');

    const cartPage = new CartPage(page);
    await cartPage.addToCart('Sauce Labs Backpack');
    await cartPage.addToCart('Sauce Labs Bike Light');
    await cartPage.navigateTo();

   const itemNames = await cartPage.itemNames();
    console.log("Items in cart:", itemNames);
    expect(itemNames).toContain('Sauce Labs Backpack');
    expect(itemNames).toContain('Sauce Labs Bike Light');
    await cartPage.removeItem('Sauce Labs Backpack');
    const updatedItemNames = await cartPage.itemNames();
    console.log("Items in cart after removal:", updatedItemNames);
    expect(updatedItemNames).toContain('Sauce Labs Bike Light');
    expect(updatedItemNames).not.toContain('Sauce Labs Backpack');
   
});