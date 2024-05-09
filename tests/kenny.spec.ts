import { test, expect } from '@playwright/test';

test.only('Get Started', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.click('.getStarted_Sjon');
    // Expect a title "to contain" a substring.

    const currentURL = page.url();
    const buttonElement = await page.$('h1');
    const installationHeader = await buttonElement?.innerText();

    expect(installationHeader).toBe("Installation")
    expect(currentURL).toBe("https://playwright.dev/docs/intro")

    // Pause the test for 10 seconds.
});


