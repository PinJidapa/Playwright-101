import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://playwright.dev/');
  await page.goto('https://ktaxa-qa.appmanteam.com/apps/case-keeper/v1/dashboard');
  await page.goto('https://portal-qa.mac-non-prod.appmanteam.com/auth/realms/ktaxa/protocol/openid-connect/auth?scope=openid&state=yenM-gZZbGArHS7_Vrk_t2XkLtlpvydI_joac0lb3Bo.wL5ku02V5xs.mac-case-keeper&response_type=code&client_id=broker&redirect_uri=https%3A%2F%2Fportal-qa.mac-non-prod.appmanteam.com%2Fauth%2Frealms%2Fmac-portal%2Fbroker%2Fktaxa%2Fendpoint&nonce=usQZYUfh8QLg4SRfXrcq6w');
  await page.getByLabel('Username or email').click();
  await page.getByLabel('Username or email').click();
  await page.getByLabel('Username or email').click();
  await page.getByLabel('Username or email').fill('client_admin_1@ktaxa.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('!QAZ2wsx');
  await page.getByRole('button', { name: 'Log In' }).click();
});