import { BasePage } from "./BasePage";
import type { Page } from "@playwright/test";

export class CartPage extends BasePage {
    static itemNames() {
        throw new Error('Method not implemented.');
    }

    constructor(page: Page) {
        super(page, '/cart.html');
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