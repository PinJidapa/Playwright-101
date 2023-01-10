export const getUsername = (page) => {
    return page.getByLabel('Username or email')
}

export const inputUserName = async (page, username, password) => {
    const loginBtn = page.getByRole('button', { name: 'Log In' });
    const usernameSelcetor = getUsername(page)
    //await usernameSelcetor.click();
    await usernameSelcetor.fill(username);
    //await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await loginBtn.click();
}

