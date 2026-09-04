import { BasePage } from "./BasePage";
import type { Page } from "@playwright/test";

export class CartPage extends BasePage {

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
             await this.page
            .locator(".inventory_item_name");
        const items = this.page.locator(".inventory_item_name");
        await items.first().waitFor({ state: "visible" });
        return await items.allTextContents();
    }
}