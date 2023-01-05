import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal-qa.mac-non-prod.appmanteam.com/apps/case-keeper/v1/dashboard');
  await page.goto('https://portal-qa.mac-non-prod.appmanteam.com/auth/realms/mac-portal/protocol/openid-connect/auth?client_id=mac-case-keeper&redirect_uri=https%3A%2F%2Fportal-qa.mac-non-prod.appmanteam.com%2Fapps%2Fcase-keeper%2Fv1%2Fdashboard&state=50ec2f6f-9394-4e1e-9b7a-5e2abc765d81&response_mode=fragment&response_type=code&scope=openid&nonce=6614ccd8-1054-492d-ad8f-a2a6a8ba3f27&kc_idp_hint=mac-portal');
  await page.getByLabel('Username or email').click();
  await page.getByLabel('Username or email').fill('niki');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('1234');
  await page.getByRole('button', { name: 'Log In' }).click();
});