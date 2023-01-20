import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ktaxa-qa.mac-non-prod.appmanteam.com/apps/case-keeper/v1/dashboard');
  await page.getByLabel('Username or email').click();
  await page.getByLabel('Username or email').fill('client_admin_1@ktaxa.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('!QAZ2wsx');
  await page.getByRole('button', { name: 'Log In' }).click();
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Result Report' }).click()
  ]);
  await page.locator('label').filter({ hasText: 'c1' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();
});