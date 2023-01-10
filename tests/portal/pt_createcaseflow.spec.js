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
  //await page.getByLabel('Username or email').fill(data.username);
  await page.getByLabel('Password').fill(data.password);
  await loginBtn.click();
  //await page.getByRole('button', { name: 'Log In' }).click();
  await inputCreateCaseForm(page, data.id, data.name, data.lastname, data.dateofbrith, data.phoneNumber)
  //await page.getByRole('button', { name: 'Create Case' }).click();
  //await page.locator('form div').filter({ hasText: 'Select Case' }).nth(2).click();
  //await page.locator('#react-select-2-option-2').click();
  //await page.getByPlaceholder('x-xxxx-xxxxx-xxx').fill(data.id);
  //await page.locator('.reselect__input-container').click();
  //await page.locator('#react-select-3-option-4').click();
  //await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]').fill(data.name);
  //await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.lastName"]').fill(data.lastname);
  //await page.getByPlaceholder('dd/mm/yyyy').fill('22/03/1996');
  //await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.phoneNumber"]').fill(data.phoneNumber);
  //await page.getByRole('button', { name: 'send' }).click();
  //await page.getByRole('button', { name: 'confirm' }).click();
  //await page.locator('xpath=//*[@id="root"]/div/div/div[5]/div[1]/div/div[3]/table/tbody/tr/td[10]/div/input[1]').first().click();
  //await page.getByRole('button', { name: 'confirm' }).click();
  await page.locator('.fixed > .w-12').click();
  await page.locator('.flex > .p-2').click();
  await page.getByRole('button', { name: 'Log out' }).click();
});