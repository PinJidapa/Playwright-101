import { test, expect } from '@playwright/test';
import { data } from '../fixture/data/login_data'
import {
  inputUserName,
  inputCreateCaseForm,
} from '../pages'




test('creat case flow', async ({ page }) => {

  await page.goto('https://ktaxa-qa.mac-non-prod.appmanteam.com/apps/case-keeper/v1/dashboard');

  await inputUserName(page, data.username, data.password)
  await inputCreateCaseForm(page, data.id, data.name, data.lastname, data.dateofbrith, data.phoneNumber)

  await page.getByText('c1').click();
  await page.getByRole('button', { name: 'Log out' }).click();
});