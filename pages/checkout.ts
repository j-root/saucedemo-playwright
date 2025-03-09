import { Page, expect } from "@playwright/test";
import BaseFunction from "./baseFunctions";
import Assert from "./assert";

export default class Cart {
  private action: BaseFunction;
  private assert: Assert;

  constructor(private page: Page) {
    this.action = new BaseFunction(page);
    this.assert = new Assert(page);
  }

  private Elements = {
    fNameTxtbx: "firstName",
    lNameTxtbx: "lastName",
    codeTxtbx: "postalCode"
  };

  async goToCart(){
    await this.page.getByRole('link', { name: '1' }).click()
  }
  
  async checkout(){
    await this.page.getByRole('link', { name: 'CHECKOUT'}).click()
  }

  async fillInformation(){
    await this.page.getByTestId(this.Elements.fNameTxtbx).fill("First")
    await this.page.getByTestId(this.Elements.lNameTxtbx).fill("Customer")
    await this.page.getByTestId(this.Elements.codeTxtbx).fill("1016")
    await this.page.getByRole('button', { name: 'CONTINUE' }).click()
  }

  async finish(){
    await this.page.getByRole('link', { name: 'FINISH' }).click()
  }
}
