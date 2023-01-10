import { test, expect } from '@playwright/test';
import { data } from '../../fixture/data/login_data_pt'
import {
  getUsername,
  inputCreateCaseForm,
} from '../../pages_pt'

test('cretaecaseflow-portal', async ({ page }) => {
  const loginBtn = page.getByRole('button', { name: 'Log In' });
  const username = getUsername(page)
  await page.goto(data.webURL);
  await username.fill(data.username);
  await page.getByLabel('Password').fill(data.password);
  await loginBtn.click();
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Result Report' }).click()
  ]);
  await page.locator('label').filter({ hasText: 'c1' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();
});