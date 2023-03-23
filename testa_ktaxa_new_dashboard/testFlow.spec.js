import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://portal-qa.mac-non-prod.appmanteam.com/apps/case-keeper/cases"
  );
  await page.goto(
    "https://portal-qa.mac-non-prod.appmanteam.com/auth/realms/mac-portal/protocol/openid-connect/auth?client_id=mac-case-keeper&redirect_uri=https%3A%2F%2Fportal-qa.mac-non-prod.appmanteam.com%2Fapps%2Fcase-keeper%2Fcases&state=eed15da9-b02d-4ae5-bf04-e7f7e21100fd&response_mode=fragment&response_type=code&scope=openid&nonce=0af4e817-cf1e-4244-aa1c-cbf41b60e4d6&kc_idp_hint=mac-portal"
  );
  await page.getByLabel("Username or email").click();
  await page.getByLabel("Username or email").fill("niki");
  await page
    .locator("#kc-form-login div")
    .filter({ hasText: "Password" })
    .click();
  await page.getByLabel("Password").fill("1234");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByRole("button", { name: "Create Case" }).click();
  await page
    .locator('xpath=//*[@id="root"]/div/div/div[5]/div/form/div[1]/div/div')
    .click();
  await page.locator("xpath=");
  await page.getByPlaceholder("x-xxxx-xxxxx-xxx").fill("2-1003-00026-833_");
  await page.getByRole("button", { name: "cancel" }).click();
});
