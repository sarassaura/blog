import { test, expect } from '@playwright/test';

test('meta is correct', async ({ page }) => {
	await page.goto('https://blog-for-learning-it-all.vercel.app/');

	await expect(page).toHaveTitle('Blog');
});
