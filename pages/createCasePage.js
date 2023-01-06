import { getFirstOption, getSecondtOption } from "./login-page"
import { clickAndInput } from '../utils'

export const getByPlaceholder = (page) => {
    return page.getByPlaceholder('x-xxxx-xxxxx-xxx')
}

export const locator = (page) => {
    return page.locator('div:nth-child(5) > .grid > div:nth-child(2) > .css-b62m3t-container > .reselect__control > .reselect__value-container > .reselect__input-container')
}


export const locatorFristName = (page) => {
    return page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]')
}

export const locatorLastName = (page) => {
    return page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.lastName"]')
}


export const currentDate = (page) => {
    return page.getByPlaceholder('dd/mm/yyyy')
}

export const getPhoneNumber = (page) => {
    return page.locator('input[name="proprietor\\.insureds\\.fields\\.0\\.phoneNumber"]')
}

export const inputCreateCaseForm = async (page, idCardNumber, name, lastname, dateofbrith, phoneNumber) => {
    const firstLocator = getFirstOption(page)
    const secondtLocator = getSecondtOption(page)
    const idCardSelector = getByPlaceholder(page)
    const selectTitle = locator(page)
    const inputFristName = locatorFristName(page)
    const inputLasttName = locatorLastName(page)
    const selectDate = currentDate(page)
    const phone = getPhoneNumber(page)
    await page.getByRole('button', { name: 'Create Link' }).click();
    await page.locator('.select').selectOption('normal');
    await firstLocator.click();
    await secondtLocator.click();
    await clickAndInput(idCardSelector, idCardNumber)
    await selectTitle.click();
    await page.locator('#react-select-3-option-4').click();
    await inputFristName.fill(name);
    await inputLasttName.fill(lastname);
    await selectDate.fill(dateofbrith);
    await page.locator('div:nth-child(9) > div > .grid > div').first().click();
    await phone.fill(phoneNumber);
    await page.locator('form').getByRole('button', { name: 'send' }).click();
    await page.getByRole('button', { name: 'confirm' }).click();
    await page.locator('xpath= //*[@id="root"]/div[3]/div/div[4]/div[1]/table/tbody/tr/td[10]/div/input[1]').click();
    await page.getByRole('button', { name: 'confirm' }).click();
}