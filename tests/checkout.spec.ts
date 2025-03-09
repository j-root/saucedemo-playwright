import { test, expect } from '@playwright/test';
import Login from "../pages/login"
import Inventory from "../pages/inventory"
import Cart from "../pages/checkout"

let login: Login
let inventory: Inventory
let cart: Cart

test('add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  const username = process.env.STANDARD_USER || ""; 
  const password = process.env.PASSWORD || ""
  login = new Login(page)
  inventory = new Inventory(page)
  cart = new Cart(page)
  await login.loginCredentials(username, password)
  await inventory.addProduct("Sauce Labs Backpack")
  await inventory.isCartUpdated()
  await cart.goToCart()
  await cart.checkout()
  await cart.fillInformation()
  await cart.finish()
});