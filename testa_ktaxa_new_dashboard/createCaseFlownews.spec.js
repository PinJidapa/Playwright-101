import { test, expect } from "@playwright/test";
import { data } from "../fixture/data/login_data";
import { inputUserName, inputCreateCaseFormNews } from "../pages";

test("test", async ({ page }) => {
  await page.goto(
    "https://portal-uat.mac-non-prod.appmanteam.com/apps/case-keeper/cases"
  );
  await inputUserName(page, data.username, data.password);

  await page.getByRole("button", { name: "Create Case" }).click();
  await page.locator("#react-select-2-placeholder").click();
  await page.locator("#react-select-2-option-13").click();

  await page.locator('input[name="policies\\.0\\.policyNumber"]').click();
  await page.locator('input[name="policies\\.0\\.policyNumber"]').fill("0011");

  await inputCreateCaseFormNews(
    page,
    data.id,
    data.name,
    data.lastname,
    data.dateofbrith,
    data.phoneNumber
  );

  await page.locator(".reselect__input-container").first().click();
  await page.locator("#react-select-3-option-4").click();
  await page
    .locator('input[name="proprietor\\.payers\\.fields\\.0\\.firstName"]')
    .click();
  await page
    .locator('input[name="proprietor\\.payers\\.fields\\.0\\.firstName"]')
    .press("CapsLock");
  await page
    .locator('input[name="proprietor\\.payers\\.fields\\.0\\.firstName"]')
    .fill("ศุภธัช");
  await page
    .getByText(
      "createLinkForm.labels.expiryDurationcreateLinkForm.labels.notifyDurationcreateLi"
    )
    .click();
  await page
    .locator('input[name="proprietor\\.payers\\.fields\\.0\\.lastName"]')
    .click();
  await page
    .locator('input[name="proprietor\\.payers\\.fields\\.0\\.lastName"]')
    .fill("ทองกล่ำ");
  await page
    .locator('input[name="proprietor\\.payers\\.fields\\.0\\.phoneNumber"]')
    .click();
  await page
    .locator('input[name="proprietor\\.payers\\.fields\\.0\\.phoneNumber"]')
    .press("CapsLock");
  await page
    .locator('input[name="proprietor\\.payers\\.fields\\.0\\.phoneNumber"]')
    .fill("0959309381");

  await page
    .locator(
      "div:nth-child(2) > .my-1 > .w-full > .css-b62m3t-container > .reselect__control > .reselect__value-container > .reselect__input-container"
    )
    .click();
  await page.locator("#react-select-4-option-4").click();
  await page
    .locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]')
    .click();
  await page
    .locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]')
    .fill("");
  await page
    .locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]')
    .press("CapsLock");
  await page
    .locator('input[name="proprietor\\.insureds\\.fields\\.0\\.firstName"]')
    .fill("ทด");
  await page
    .locator('input[name="proprietor\\.insureds\\.fields\\.0\\.lastName"]')
    .click();
  await page
    .locator('input[name="proprietor\\.insureds\\.fields\\.0\\.lastName"]')
    .fill("สอบ");
  await page.getByRole("button", { name: "send" }).click();
  await page.getByRole("button", { name: "confirm" }).click();
  await page
    .getByRole("row", {
      name: "Change new owner 0011 ศุภธัช ทองกล่ำ 2100300026833 - Required Required",
    })
    .getByRole("img")
    .click();
  await page.getByRole("radio").first().check();
  await page.getByRole("button", { name: "confirm" }).click();
  await page
    .getByRole("row", {
      name: "0011 ศุภธัช ทองกล่ำ 6833 Change new owner 0959309381 20/01/2566 - 27/01/2566 - Open",
    })
    .getByRole("cell", { name: "Change new owner" })
    .click();
  await page.getByRole("button", { name: "Resend Link" }).click();
  await page.getByRole("button", { name: "confirm" }).click();
});
