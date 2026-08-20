import { BasePage } from "./BasePage";
import type { Page } from "@playwright/test";

export class InventoryPage extends BasePage {

    constructor(page: Page) {
        super(page, '/inventory.html');
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
}