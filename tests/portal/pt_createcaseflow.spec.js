import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal-qa.mac-non-prod.appmanteam.com/apps/case-keeper/cases');
  await page.getByLabel('Username or email').fill('native');
  await page.getByLabel('Username or email').click();
  await page.getByLabel('Username or email').fill('native_core_2');
  await page.getByLabel('Username or email').press('Tab');
  await page.getByLabel('Password').fill('!QAZ2wsx');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Create Case' }).click();
  await page.locator('form div').filter({ hasText: 'Select Case' }).nth(2).click();
  await page.locator('#react-select-2-option-2').click();
  await page.getByPlaceholder('x-xxxx-xxxxx-xxx').click();
  await page.getByPlaceholder('x-xxxx-xxxxx-xxx').fill('1-9098-01024-569_');
  await page.locator('.reselect__input-container').click();
  await page.locator('#react-select-3-option-4').click();
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]').click();
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]').press('ArrowDown');
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]').press('ArrowDown');
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]').fill('ณธณัฎฐ์');
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.lastName"]').click();
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.lastName"]').fill('เจริญทรัพย์');
  await page.getByPlaceholder('dd/mm/yyyy').fill('22/03/1996');
  await page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.phoneNumber"]').fill('0800359595');
  await page.getByRole('button', { name: 'send' }).click();
  await page.getByRole('button', { name: 'confirm' }).click();
  await page.locator('xpath=//*[@id="root"]/div/div/div[5]/div[1]/div/div[3]/table/tbody/tr/td[10]/div/input[1]').first().click();
  await page.getByRole('button', { name: 'confirm' }).click();
  await page.locator('.fixed > .w-12').click();
  await page.locator('.flex > .p-2').click();
  await page.getByRole('button', { name: 'Log out' }).click();
});