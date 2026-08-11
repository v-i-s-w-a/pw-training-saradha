import { BasePage } from "./BasePage";
import type { Locator, Page } from "@playwright/test";
export class CartPage extends BasePage {

//readonly cartItem : Locator;

constructor(page: Page) {

    super(page, '/cart.html');
}
    async addToCart(itemName: string) {
       const itemLocator = this.page.getByTestId('inventory-item').filter({
        hasText: itemName
    });
       const addToCartButton = itemLocator.getByRole('button', {
        name: 'Add to cart'
    });
       await addToCartButton.click();
    }

    async removeItem(itemName: string) {
        const itemLocator = this.page.getByTestId('inventory-item').filter({
        hasText: itemName
  });
        const removeButton = itemLocator.getByRole('button', {
        name: 'Remove'
  });
        await removeButton.click();
}

    async itemNames(): Promise<string[]> {
     return await this.page
     .locator(".inventory_item_name")
     .allTextContents();
}
}