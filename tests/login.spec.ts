import { test, expect } from '@playwright/test';
import Login from "../pages/login"

let login: Login

test('login standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  const username = process.env.STANDARD_USER || ""; 
  const password = process.env.PASSWORD || ""
  login = new Login(page)
  await login.loginCredentials(username, password)
});

test.fail('login locked user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  const username = process.env.LOCKED_USER || ""; 
  const password = process.env.PASSWORD || ""
  login = new Login(page)
  await login.loginCredentials(username, password)
});
