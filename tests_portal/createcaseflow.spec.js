import { test, expect } from '@playwright/test';
import { obj as data } from '../fixture/data/login_data.js'

test('test', async ({ page }) => {
  await page.goto('http://playwright.dev/');
  await page.goto('https://portal-qa.mac-non-prod.appmanteam.com/apps/case-keeper/v1/dashboard');
  await page.locator('#kc-form-login div').filter({ hasText: 'Username or email' }).click();
  await page.getByLabel('Username or email').click();
  await page.getByLabel('Username or email').fill(data.username);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(data.password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Create Link' }).click();
  await page.locator('.select').selectOption('normal');
  await page.locator('xpath=//*[@id="root"]/div[3]/div/form/div[2]/div[3]/div/div/div/div/div/div[2]/div/div/div[1]/div[2]').click();
  await page.locator('xpath=//*[@id="react-select-2-option-0"]').click()
  await page.getByPlaceholder('x-xxxx-xxxxx-xxx').click();
  await page.getByPlaceholder('x-xxxx-xxxxx-xxx').fill('2-1003-00026-833_');
  await page.locator('div:nth-child(5) > .grid > div:nth-child(2) > .css-b62m3t-container > .reselect__control > .reselect__value-container > .reselect__input-container').click();
  await page.locator('#react-select-3-option-4').click();
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]').click();
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]').press('CapsLock');
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]').fill('ศุภธัช');
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.lastName"]').click();
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.lastName"]').fill('ทองกล่ำ');
  await page.getByPlaceholder('dd/mm/yyyy').click();
  await page.getByPlaceholder('dd/mm/yyyy').press('CapsLock');
  await page.getByPlaceholder('dd/mm/yyyy').fill('19/02/1999');
  await page.locator('div:nth-child(9) > div > .grid > div').first().click();
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.phoneNumber"]').click();
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.phoneNumber"]').fill('0959309381');
  await page.locator('form').getByRole('button', { name: 'send' }).click();
  await page.getByRole('button', { name: 'confirm' }).click();
  await page.locator('xpath= //*[@id="root"]/div[3]/div/div[4]/div[1]/table/tbody/tr/td[10]/div/input[1]').click();
  await page.getByRole('button', { name: 'confirm' }).click();
  await page.getByText('c1').click();
  await page.getByRole('button', { name: 'Log out' }).click();
});