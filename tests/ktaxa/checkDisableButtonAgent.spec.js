import { test, expect } from '@playwright/test';
import { data } from '../fixture/data/login_data'
import { DashboardPageSelectors, DashboardPageSendLinkHistory, DotDotDotMenuSelector, inputUserName } from '../pages'




test('test', async ({ page }) => {
    await page.goto('https://ktaxa-qa.mac-non-prod.appmanteam.com/apps/case-keeper/v1/dashboard');

    await inputUserName(page, data.username, data.password)
    await page.locator('label > div > .svg-inline--fa').first().click();
    //*[@id="generate-report-button"]
    expect(await page.locator(DashboardPageSelectors.resultReportSelector).getAttribute('class')).toMatch(/(disabled)/gm)
    expect(await page.locator(DashboardPageSendLinkHistory.resultSendLinkSelector).getAttribute('class')).toMatch(/(disabled)/gm)
    expect(await page.locator(DotDotDotMenuSelector.resultSendLink).getAttribute('class')).toMatch(/(disabled)/gm)
    expect(await page.locator(DotDotDotMenuSelector.resultDownLoadPdf).getAttribute('class')).toMatch(/(disabled)/gm)
    expect(await page.locator(DotDotDotMenuSelector.resultDownLoadZip).getAttribute('class')).toMatch(/(disabled)/gm)
    expect(await page.locator(DotDotDotMenuSelector.resultDeleteCase).getAttribute('class')).toMatch(/(disabled)/gm)
    //*[@id="root"]/div/div[3]/div/div/table/tbody/tr[1]/td[14]/div/ul/li[1]/label



















    // console.log(result)Z
    // expect(locator).toBeDisabled()
    // function rejected(result) {
    //     console.error(result);x
    // }
    // Promise.reject(new Error('fail')).then(true, rejected);




    // await page.getByRole('cell', { name: 'Send link history Download PDF file Download zip file Remark Resend Delete' }).getByText('Download PDF file').click();
    // const [page1] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.waitForEvent('download'),
    //     page.getByRole('button', { name: 'confirm' }).click()
    // ]);
    // await page.locator('label > div > .svg-inline--fa').first().click();
    // const [download] = await Promise.all([
    //     page.waitForEvent('download'),
    //     page.getByRole('cell', { name: 'Send link history Download PDF file Download zip file Remark Resend Delete' }).getByText('Download zip file').click()
    // ]);
    // await page.getByRole('cell', { name: 'Send link history Download PDF file Download zip file Remark Resend Delete' }).getByText('Remark').click();
    // await page.getByRole('cell', { name: 'Send link history Download PDF file Download zip file Remark Resend Delete' }).locator('label').filter({ hasText: 'Remark' }).click();
    // await page.getByRole('cell', { name: 'Send link history Download PDF file Download zip file Remark Resend Delete' }).getByText('Resend').click();
    // await page.getByRole('button', { name: 'confirm' }).click();
    // await page.locator('label > div > .svg-inline--fa').first().click();
    // await page.getByRole('cell', { name: 'Send link history Download PDF file Download zip file Remark Resend Delete' }).getByText('Delete').click();
    // await page.getByRole('button', { name: 'confirm' }).click();
});