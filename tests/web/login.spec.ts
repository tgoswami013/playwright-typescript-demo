import {test, expect} from '@playwright/test';


test('Sample Test', async ({ page }) => {
    await page.goto('/my-content');  
})

test('Sample Test 2', async ({ page }) => {
    await page.goto('/user');  
})