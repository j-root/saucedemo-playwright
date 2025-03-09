import { test, expect } from '@playwright/test';
import Login from "../pages/login"
import Inventory from "../pages/inventory"

let login: Login
let inventory: Inventory

test('add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  const username = process.env.STANDARD_USER || ""; 
  const password = process.env.PASSWORD || ""
  login = new Login(page)
  inventory = new Inventory(page)
  await login.loginCredentials(username, password)
  await inventory.addProduct("Sauce Labs Backpack")
  await inventory.isCartUpdated()
});

test('remove product from cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/index.html');
    const username = process.env.STANDARD_USER || ""; 
    const password = process.env.PASSWORD || ""
    login = new Login(page)
    inventory = new Inventory(page)
    await login.loginCredentials(username, password)
    await inventory.addProduct("Sauce Labs Backpack")
    await inventory.removeProduct("Sauce Labs Backpack")
});
