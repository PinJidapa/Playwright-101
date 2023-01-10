
export const getByPlaceholder = (page) => {
    return page.getByPlaceholder('x-xxxx-xxxxx-xxx')
}
export const locator = (page) => {
    return page.locator('.reselect__input-container')
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
    const idCardSelector = getByPlaceholder(page)
    const selectTitle = locator(page)
    const inputFristName = locatorFristName(page)
    const inputLasttName = locatorLastName(page)
    const selectDate = currentDate(page)
    const phone = getPhoneNumber(page)
    await page.getByRole('button', { name: 'Create Case' }).click();
    await page.locator('form div').filter({ hasText: 'Select Case' }).nth(2).click();
    await page.locator('#react-select-2-option-2').click();
    await idCardSelector.fill(idCardNumber);
    await selectTitle.click();
    await page.locator('#react-select-3-option-4').click();
    await inputFristName.fill(name);
    await inputLasttName.fill(lastname);
    await selectDate.fill(dateofbrith);
    await phone.fill(phoneNumber);
    await page.getByRole('button', { name: 'send' }).click();
    await page.getByRole('button', { name: 'confirm' }).click();
    await page.locator('xpath=//*[@id="root"]/div/div/div[5]/div[1]/div/div[3]/table/tbody/tr/td[10]/div/input[1]').first().click();
    await page.getByRole('button', { name: 'confirm' }).click();
}