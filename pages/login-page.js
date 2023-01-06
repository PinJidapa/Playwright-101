export const getUsername = (page) => {
    return page.getByLabel('Username or email')
}

export const getFirstOption = (page) => {
    return page.locator('xpath=//*[@id="root"]/div[3]/div/form/div[2]/div[3]/div/div/div/div/div/div[2]/div/div/div[1]/div[2]')
}

export const getSecondtOption = (page) => {
    return page.locator('xpath=//*[@id="react-select-2-option-0"]')
}
