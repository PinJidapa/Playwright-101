import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://portal-qa.mac-non-prod.appmanteam.com/apps/case-keeper"
  );
  await page.getByLabel("username").click();
  await page.getByLabel("username").fill("nikis");
  await page.getByLabel("password").click();
  await page.getByLabel("password").fill("1234");
  await page.getByRole("button", { name: "doLogIn" }).click();

  try {
    const errorElement = await page.getByText("invalidUserMessage");
    const errorMessage = await errorElement.textContent();
    console.log(errorMessage);
    if (errorMessage.trim() === "invalidUserMessage") {
      console.log(
        "Error message matches the expected value: invalidUserMessage"
      );
      // Perform further actions or assertions if needed
    } else {
      console.log(
        "Error message does not match the expected value. Actual error message:",
        errorMessage
      );
      // Perform further actions or assertions if needed
    }
  } catch (error) {
    console.log("Error element not found within the specified timeout.");
    // Handle the error or perform further actions if needed
  }
});
