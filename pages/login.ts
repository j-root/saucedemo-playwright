import { Page, expect } from "@playwright/test";
import BaseFunction from "./baseFunctions";
import Assert from "./assert";

export default class Login {
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

  async loginCredentials(user:string, pw:string) {
    await this.action.replaceTextAndTypeInputByTestId(this.Elements.usernameTxtbx, user);
    await this.action.replaceTextAndTypeInputByTestId(this.Elements.passwordTxtbx, pw);
    await this.page.locator('#login-button').click()
    // await this.page.waitForTimeout(5000)
    expect(this.page.getByText('Products')).toBeVisible({timeout: 5000})
  }
}
