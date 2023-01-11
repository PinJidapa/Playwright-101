import { test, expect } from '@playwright/test';
import { data } from '../../fixture/data/login_data_pt'
import {
  getUsername,
  inputCreateCaseForm,
} from '../../pages_pt'


const downloadResultBtnSelector = '//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[1]/div[2]/div[2]/div/button'
const downloadSentlinkBtnSelector = '//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[1]/div[2]/div[2]/div/ul/li[2]/button'
test('cretaecaseflow-portal', async ({ page }) => {
  const loginBtn = page.getByRole('button', { name: 'Log In' });
  const username = getUsername(page)
  await page.goto(data.webURL);
  await username.fill(data.username);
  await page.getByLabel('Password').fill(data.password);
  await loginBtn.click();
  await page.locator('.w-9').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download Result Report' }).click();
  const download = await downloadPromise;
  //await page.locator('.fixed > .w-12').click();
  //await page.locator('.flex > .p-2').click();
  //await page.getByRole('button', { name: 'Log out' }).click();

  expect(await page.locator(downloadBtnSelector).getAttribute('class')).not.toMatch(/(disabled)/gm);

});