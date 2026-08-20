import { test, expect } from '../fixtures';

test('Add and Remove Items from Cart', async ({ cartPage }) => {
    const itemNames = await cartPage.itemNames();
      console.log("Items in cart:", itemNames);

    expect(itemNames).toContain('Sauce Labs Backpack');
    expect(itemNames).toContain('Sauce Labs Bike Light');

    await cartPage.removeItem('Sauce Labs Backpack');

    const updatedItemNames = await cartPage.itemNames();
    console.log("Items in cart after removal:", updatedItemNames);

    expect(updatedItemNames).not.toContain('Sauce Labs Backpack');
    expect(updatedItemNames).toContain('Sauce Labs Bike Light');
});