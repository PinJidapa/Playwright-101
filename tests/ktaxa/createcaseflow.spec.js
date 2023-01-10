import { test, expect } from '@playwright/test';
import { data } from '../../fixture/data/login_data'
// import { getUsername } from '../pages/login-page'
// import { getFirstOption } from '../pages/login-page'
// import { getSecondtOption } from '../pages/login-page'
// import { getByPlaceholder } from '..//pages/createCasePage'
// import { locator } from '..//pages/createCasePage'
// import { locatorFristName } from '..//pages/createCasePage'
// import { locatorLastName } from '..//pages/createCasePage'
// import { currentDate } from '..//pages/createCasePage'
// import { phoneNumber } from '..//pages/createCasePage'
import {
  getUsername,
  inputCreateCaseForm,
} from '../../pages'




test('create case flow', async ({ page }) => {
  const loginBtn = page.getByRole('button', { name: 'Log In' });
  const username = getUsername(page)

  await page.goto('https://ktaxa-qa.mac-non-prod.appmanteam.com/apps/case-keeper/v1/dashboard');

  await username.click();
  await username.fill(data.username);

  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(data.password);
  await loginBtn.click();

  await inputCreateCaseForm(page, data.id, data.name, data.lastname, data.dateofbrith, data.phoneNumber)

  await page.getByText('c1').click();
  await page.getByRole('button', { name: 'Log out' }).click();
});