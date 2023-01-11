import { test, expect } from '@playwright/test';
import { data } from '../../fixture/data/login_data_pt'
import {
  getUsername,
  inputCreateCaseForm,
} from '../../pages_pt'


const downloadSendlinkBtnSelector = '//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[1]/div[2]/div[2]/div/ul/li[2]/button'
test('cretaecaseflow-portal', async ({ page }) => {
  const loginBtn = page.getByRole('button', { name: 'Log In' });
  const username = getUsername(page)
  await page.goto(data.webURL);
  await username.fill(data.username);
  await page.getByLabel('Password').fill(data.password);
  await loginBtn.click();
  await page.locator('.w-9').click();
  await page.getByRole('button', { name: 'Download Send Link Report' }).click();
  await page.getByPlaceholder('Select date').click();
  await page.getByRole('option', { name: 'Choose Sunday, January 1st, 2023' }).click();
  await page.getByRole('option', { name: 'Choose Wednesday, January 11th, 2023' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'confirm' }).click();
  const download = await downloadPromise;

  expect(await page.locator(downloadSendlinkBtnSelector).getAttribute('class')).toMatch(/(disabled)/gm);

});