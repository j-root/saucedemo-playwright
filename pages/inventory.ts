import { Page, expect } from "@playwright/test";
import BaseFunction from "./baseFunctions";
import Assert from "./assert";

export default class Inventory {
  private action: BaseFunction;
  private assert: Assert;

  constructor(private page: Page) {
    this.action = new BaseFunction(page);
    this.assert = new Assert(page);
  }

  private Elements = {
    usernameTxtbx: "username",
    passwordTxtbx: "password",
    loginBtn: "login-button"
  };

  async addProduct(name : string) {
    const element = this.page.getByText(name).locator("..").locator("..").locator("..")
    await element.getByRole("button", { name: "ADD TO CART" }).click({force:true})
  }

  async removeProduct(name : string){
    const element = this.page.getByText(name).locator("..").locator("..").locator("..")
    await element.getByRole("button", { name: "REMOVE" }).click()
  }

  async isCartUpdated(){
    await expect(this.page.getByRole('link', { name: '1' })).toBeVisible({timeout: 5000})
  }
}
