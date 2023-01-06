export const clickAndInput = async (selector, input) => {
    await selector.click()
    await selector.fill(input)
}