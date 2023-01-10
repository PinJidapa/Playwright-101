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
  await inputCreateCaseForm(page, data.id, data.name, data.lastname, data.dateofbrith, data.phoneNumber)
  await page.locator('.fixed > .w-12').click();
  await page.locator('.flex > .p-2').click();
  await page.getByRole('button', { name: 'Log out' }).click();
});