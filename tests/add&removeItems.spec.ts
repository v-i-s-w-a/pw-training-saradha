import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Add and Remove Items from Cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toContain('/inventory.html');
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigateTo();
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.addToCart('Sauce Labs Bike Light');
    const cartPage = new CartPage(page);
    await cartPage.navigateTo();
    const itemNames = await cartPage.itemNames();
    console.log("Items in cart:", itemNames);
    expect(itemNames).toContain('Sauce Labs Backpack');
    await cartPage.removeItem('Sauce Labs Backpack');
    const updatedItemNames = await cartPage.itemNames();
    console.log("Items in cart after removal:", updatedItemNames);
    expect(updatedItemNames).not.toContain('Sauce Labs Backpack');
});