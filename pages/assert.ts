import { expect, Page } from "@playwright/test";

export default class Assert {
  constructor(private page: Page) {}

  async assertPageTitleContains(title: string) {
    const pageTitle = await this.page.title();
    expect(pageTitle).toContain(title);
  }

  async assertExactURL(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async assertURLContains(title: string) {
    const pageURL = this.page.url();
    expect(pageURL).toContain(title);
  }

  async assertElementsHasText(elementId: string, name: string) {
    await expect(this.page.getByTestId(elementId)).toHaveText(name);
  }

  async assertElementIsVisible(elementId: string) {
    await expect(this.page.getByTestId(elementId)).toBeVisible({
      timeout: 10000,
    });
  }

  async assertElementContainsText(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async assertElementInIframeContainsText(iframeId: string, text: string) {
    await expect(
      this.page.frameLocator(iframeId).getByText(text)
    ).toBeVisible();
  }

  async assertElementAltTextIsVisible(text: string) {
    await expect(this.page.getByAltText(text)).toBeVisible();
  }

  async assertFirstElementIsVisibleById(elementId: string) {
    await expect(this.page.getByTestId(elementId).nth(0)).toBeVisible();
  }

  async assertElementCountByLinkGreaterThan(elementSize: number) {
    const count = await this.page.getByRole("link").count();
    expect(count).toBeGreaterThan(elementSize);
  }

  async assertFirstFilteredElementHasText(elementId: string, text: string) {
    const element = this.page.getByTestId(elementId).nth(0);
    await element.waitFor({
      state: "visible",
    });
    await expect(element.getByText(text)).toBeVisible({ timeout: 15000 });
  }

  async assertFilteredElementHasNoText(elementId: string, text: string) {
    const element = this.page.getByTestId(elementId);
    await element.waitFor({
      state: "visible",
    });
    await expect(element.getByText(text)).toHaveCount(0);
  }

  async assertElementVisibleWithParentById(parentId: string, childId: string) {
    const element = this.page.getByTestId(parentId);
    await element.waitFor({
      state: "visible",
    });
    await expect(element.getByTestId(childId)).toBeVisible();
  }

  async assertValueFromFilteredElementByText(
    parentId: string,
    childId: string,
    text: string,
    value: string
  ) {
    const element = this.page.getByTestId(parentId).filter({ hasText: text });
    const elementText = await element.getByTestId(childId).innerText();
    expect(elementText).toEqual(value);
  }

  async assertElementNotExistByTestId(elementId: string) {
    const element = this.page.getByTestId(elementId);
    await expect(element).toHaveCount(0);
  }

  async assertElementIsEnabled(elementId: string) {
    const element = this.page.getByTestId(elementId);
    await expect(element).toBeEnabled();
  }

  async assertElementCountGreaterThanByTestId(elementId: string, num: number) {
    const count = await this.page.getByTestId(elementId).count();
    expect(count).toBeGreaterThan(num);
  }

  async assertElementCountEqualByTestId(elementId: string, num: number) {
    const count = await this.page.getByTestId(elementId).count();
    expect(count).toEqual(num);
  }

  async assertElementVisibleFromFilteredElementByText(
    parentId: string,
    childId: string,
    text: string
  ) {
    const element = this.page.getByTestId(parentId).filter({ hasText: text });
    await expect(element.getByTestId(childId)).toBeVisible({ timeout: 15000 });
  }

  async assertElementWithTextIsVisible(elementId: string, text: string) {
    const element = this.page.getByTestId(elementId);
    await expect(
      element.filter({
        hasText: text,
      })
    ).toBeVisible();
  }

  async assertFilteredElementNotExistByTestId(elementId: string, text: string) {
    const element = this.page.getByTestId(elementId).filter({
      hasText: text,
    });
    await expect(element).toHaveCount(0);
  }

  async assertElementDisabledByTestId(elementId: string) {
    const element = this.page.getByTestId(elementId);
    await expect(element).toBeDisabled();
  }

  async assertCheckboxIsChecked(elementId: string) {
    const element = this.page.getByTestId(elementId);
    expect(element.isChecked()).toBeTruthy();
  }

  async assertElementIsVisibleByLabel(text: string) {
    const element = this.page.getByLabel(text);
    await expect(element).toBeVisible();
  }

  async assertHeadingByText(text: string) {
    const element = this.page.getByRole("heading", { name: text });
    await expect(element).toBeVisible();
  }

  async assertAlertByText(text: string) {
    const element = this.page.getByRole("alert").filter({ hasText: text });
    await expect(element).toBeVisible();
  }

  async assertCheckboxIsCheckedByLabel(text: string) {
    const element = this.page.locator(`label:has-text("${text}")`);
    expect(element.isChecked()).toBeTruthy();
  }

  async assertCheckboxIsUnchecked(elementId: string) {
    const element = this.page.getByTestId(elementId);
    expect(element.isChecked()).toBeFalsy();
  }

  async assertElementAttributeValueContains(
    elementId: string,
    attribute: string,
    value: string
  ) {
    const element = this.page.getByTestId(elementId);
    const attributeValue = await element.getAttribute(attribute);
    expect(attributeValue).toContain(value);
  }

  async assertElementByTestIdContainsText(elementId: string, text: string) {
    await expect(this.page.getByTestId(elementId)).toContainText(text);
  }

  async assertElementToHaveAttribute(elementId: string, attribute: string) {
    await expect(this.page.getByTestId(elementId)).toHaveAttribute(
      attribute,
      ""
    );
  }

  async assertElementHasCountByTestId(elementId: string, count: number) {
    await expect(this.page.getByTestId(elementId)).toHaveCount(count);
  }

  async assertElementNotExistByText(text: string) {
    const element = this.page.getByText(text);
    await expect(element).toHaveCount(0);
  }

  async assertElementByXpathContainsText(xpath: string, text: string) {
    await expect(this.page.locator(xpath)).toContainText(text);
  }

  async assertElementIsVisibleByXpath(xpath: string) {
    await expect(this.page.locator(xpath)).toBeVisible();
  }

  async assertFilteredElementDisabledByTestId(elementId: string, text: string) {
    const element = this.page.getByTestId(elementId).filter({ hasText: text });
    await expect(element).toBeDisabled();
  }

  async assertElementNotVisible(elementId: string) {
    await expect(this.page.getByTestId(elementId)).not.toBeVisible({
      timeout: 3000,
    });
  }

  async assertExactText(text: string) {
    await expect(this.page.getByText(text, { exact: true })).toBeVisible();
  }
}
