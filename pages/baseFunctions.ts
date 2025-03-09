import { Page, Locator } from "@playwright/test";

export default class BaseFunctions {
  constructor(private page: Page) {}

  async waitAndClick(locator: string) {
    const element = this.page.locator(locator);
    await element.waitFor({
      state: "visible",
    });
    await element.click();
  }

  async waitAndClickByText(text: string) {
    const element = this.page.getByText(text);
    await element.waitFor({
      state: "visible",
    });
    await element.click();
  }

  async waitAndClickByTestId(id: string) {
    const element = this.page.getByTestId(id);
    await element.waitFor({
      state: "visible",
    });
    await element.click({ force: true });
  }

  async waitAndClickElementInIframe(iframeId: string, locator: Locator) {
    await this.page.frameLocator(iframeId).locator(locator).click();
  }

  async waitAndTypeText(locator: string, text: string) {
    const element = this.page.locator(locator);
    await element.waitFor({
      state: "visible",
    });
    await element.type(text);
  }

  async waitAndPasteText(locator: string, text: string) {
    const element = this.page.locator(locator);
    await element.waitFor({
      state: "visible",
    });
    await element.fill(text);
  }

  async waitForElementTobeVisible(locator: string) {
    const element = this.page.locator(locator);
    await element.waitFor({
      state: "visible",
    });
  }

  async waitForElementTobeVisibleUsingTestId(locator: string) {
    const element = this.page.getByTestId(locator);
    await element.waitFor({
      state: "visible",
    });
  }

  async waitForAllElementsTobeVisibleByTestId(locator: string) {
    const elements = await this.page.getByTestId(locator).all();
    for (const element of elements) {
      await element.waitFor({
        state: "visible",
      });
    }
  }

  async waitForFirstElementTobeVisibleByTestId(locator: string) {
    const element = this.page.getByTestId(locator).nth(0);
    await element.waitFor({
      state: "visible",
    });
  }

  async typeInElementByText(displayedText: string, inputText: string) {
    const element = this.page.getByText(displayedText);
    await element.waitFor({
      state: "visible",
    });
    await element.type(inputText);
  }

  async typeInInputUsingTestId(inputId: string, inputText: string) {
    const element = this.page.getByTestId(inputId);
    await element.waitFor({
      state: "visible",
    });
    await element.type(inputText);
  }

  async selectFirstElementUsingTestId(id: string) {
    const element = this.page.getByTestId(id).nth(0);
    await element.waitFor({
      state: "visible",
    });
    await element.click();
  }

  async waitAndForceClick(id: string) {
    const element = this.page.getByTestId(id);
    await element.waitFor({
      state: "visible",
    });
    await element.click({ force: true });
  }

  async clickThisElementLocationByTestId(id: string, n: number) {
    const element = this.page.getByTestId(id).nth(n);
    await element.waitFor({
      state: "visible",
    });
    await element.click({ force: true });
  }

  async waitForElementWithTextToBeVisible(text: string) {
    const element = this.page.getByText(text);
    await element.waitFor({
      state: "visible",
    });
  }

  async waitForElementToBeDetached(id: string) {
    const element = this.page.getByTestId(id);
    await element.waitFor({
      state: "detached",
    });
  }

  async replaceTextAndTypeInputByTestId(id: string, text: string) {
    const element = this.page.getByTestId(id);
    await element.waitFor({
      state: "visible",
    });
    await element.fill("");
    await element.fill(text);
  }

  async waitForLoadingToDetach() {
    const element = this.page.getByText("Loading", { exact: true });
    await element.waitFor({
      state: "detached",
    });
  }

  async getElementAttributeValueUsingTestId(id: string, attribute: string) {
    const element = this.page.getByTestId(id);
    return await element.getAttribute(attribute);
  }

  async getElementByTestIdAndClickChildElementByTestId(
    parentId: string,
    childId: string
  ) {
    const element = this.page.getByTestId(parentId);
    await element.getByTestId(childId).click();
  }

  async getElementAttributeValueFilteredFromParentByTestId(
    parentId: string,
    childId: string,
    attribute: string
  ) {
    const element = this.page.getByTestId(parentId);
    return await element.getByTestId(childId).getAttribute(attribute);
  }

  async waitElementFilteredFromParentByTestId(
    parentId: string,
    childId: string
  ) {
    const element = this.page.getByTestId(parentId);
    await element.getByTestId(childId).waitFor({
      state: "visible",
    });
  }

  async waitForElementToDetachByText(text: string) {
    const element = this.page.getByText(text);
    await element.waitFor({
      state: "detached",
    });
  }

  async waitElementByTextFilteredFromParentById(id: string, text: string) {
    const element = this.page.getByTestId(id);
    await element.getByText(text).waitFor({
      state: "visible",
    });
  }

  async waitAndHoverByTestId(id: string) {
    const element = this.page.getByTestId(id);
    await element.waitFor({
      state: "visible",
    });
    await element.hover();
  }

  async waitAndDoubleClickByTestId(id: string) {
    const element = this.page.getByTestId(id);
    await element.waitFor({
      state: "visible",
    });
    await element.dblclick();
  }

  async waitForUrlUntilLoaded(url: string) {
    await this.page.waitForURL(url, {
      waitUntil: "load",
    });
  }

  async reloadCurrentPage() {
    await this.page.reload({
      waitUntil: "load",
    });
  }

  async getElementInnerTextByTestId(elementId: string) {
    const element = this.page.getByTestId(elementId);
    await element.waitFor({
      state: "visible",
    });
    return await element.innerText();
  }

  async waitForTilesLoadingToDetach() {
    const elements = await this.page
      .getByText("Loading...", { exact: true })
      .all();
    for (const element of elements) {
      await element.waitFor({
        state: "detached",
      });
    }
  }

  async clickElementFromFilteredParent(
    parentId: string,
    childId: string,
    text: string
  ) {
    const element = this.page.getByTestId(parentId).filter({ hasText: text });
    const childElement = element.getByTestId(childId);
    await childElement.click();
  }

  async hoverElementFromFilteredParent(
    parentId: string,
    childId: string,
    text: string
  ) {
    const element = this.page.getByTestId(parentId).filter({ hasText: text });
    const childElement = element.getByTestId(childId);
    await childElement.hover();
  }

  async waitForElementToBeVisibleByLabel(text: string) {
    const element = this.page.getByLabel(text);
    await element.waitFor({
      state: "visible",
    });
  }

  async clickElementByLabel(text: string, isExact?: boolean) {
    let element: Locator;
    isExact
      ? (element = this.page.getByLabel(text, { exact: true }))
      : (element = this.page.getByLabel(text));
    await element.waitFor({
      state: "visible",
    });
    await element.click({ force: true });
  }

  async checkElementUsingLabel(text: string) {
    const element = this.page.locator(`label:has-text("${text}")`);
    await element.check({ force: true });
  }

  async uncheckElementUsingLabel(text: string) {
    const element = this.page.locator(`label:has-text("${text}")`);
    await element.uncheck({ force: true });
  }

  async checkElementUsingTestId(elementId: string) {
    const element = this.page.getByTestId(elementId);
    await element.check({ force: true });
  }

  async uncheckElementUsingTestId(elementId: string) {
    const element = this.page.getByTestId(elementId);
    await element.uncheck({ force: true });
  }

  async checkElementByLabel(text: string) {
    const element = this.page.getByLabel(text, { exact: true });
    await element.waitFor({
      state: "visible",
    });
    await element.check({ force: true });
  }

  async clickFilteredElementByText(elementId: string, text: string) {
    const element = this.page.getByTestId(elementId).filter({ hasText: text });
    await element.click({ force: true });
  }

  async getElementAttributeValueByXpath(xpath: string, attribute: string) {
    const element = this.page.locator(xpath);
    return await element.getAttribute(attribute);
  }

  async replaceAndTypeText(locator: string, text: string) {
    const element = this.page.locator(locator);
    await element.waitFor({
      state: "visible",
    });
    await element.fill("");
    await element.type(text);
  }

  async waitForTilesConnectingToDetach() {
    const elements = await this.page
      .getByText("Connecting...", { exact: true })
      .all();
    for (const element of elements) {
      await element.waitFor({
        state: "detached",
      });
    }
  }

  async clickFirstElementByTestIdWithRegex(pattern: RegExp) {
    const element = this.page.getByTestId(pattern).first();
    await element.waitFor({
      state: "visible",
    });
    await element.click();
  }

  async checkFirstElementUsingTestId(elementId: string) {
    const element = this.page.getByTestId(elementId).first();
    await element.check({ force: true });
  }

  async setCheckElementById(elementId: string) {
    const element = this.page.getByTestId(elementId);
    await element.setChecked(true, { force: true });
  }

  async setUncheckElementById(elementId: string) {
    const element = this.page.getByTestId(elementId);
    await element.setChecked(false, { force: true });
  }

  async getElementCount(elementId: string) {
    return await this.page.getByTestId(elementId).count();
  }
}
