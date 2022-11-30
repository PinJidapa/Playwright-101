import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://frontend-az.uat.krungthai-axa.co.th/advisors/quote/portal');
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Remote Selling' }).click()
  ]);
  await page1.getByRole('link', { name: 'เข้าสู่ระบบด้วยอีเมลและรหัสผ่าน' }).click();
  await page1.getByPlaceholder('ใส่อีเมล หรือ ชื่อผู้ใช้งาน').click();
  await page1.getByPlaceholder('ใส่อีเมล หรือ ชื่อผู้ใช้งาน').fill('agentdlf14');
  await page1.getByPlaceholder('ใส่รหัสผ่าน').click();
  await page1.getByPlaceholder('ใส่รหัสผ่าน').fill('Password@02');
  await page1.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('button', { name: 'Remote Selling' }).click();
});

