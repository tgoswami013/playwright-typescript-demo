
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
 
// Login
await page.goto('https://www.programsbuzz.com/user/login');
await page.locator('input#edit-name').fill('tg.learn13');
await page.locator('input#edit-pass').fill('1acgaihigo');
await page.locator("input[value='Log in']").click();
  
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
//   await page.waitForURL('https://github.com/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator("h1.page-title")).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});