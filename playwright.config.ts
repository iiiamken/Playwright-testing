/* eslint-disable no-undef */
// @ts-check
import { defineConfig, devices } from "@playwright/test"
import { format } from 'date-fns';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const date = new Date();
const formattedDate = format(date, 'dd-MMM-yyyy_HH.mm');

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //   workers: process.env.CI ? 1 : undefined,
  workers: 1,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: "on-first-retry",
    headless: false,
  },

  projects: [
    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] },
    // },
    { name: 'Google Chrome', use: { ...devices['Desktop Chrome'], channel: 'chrome', headless: false }, },

  ],
  reporter: [
    ['html', { outputFolder: `./playwright-report/${formattedDate}` }],
    ['list'],
    ['json', { outputFile: `./playwright-report/${formattedDate}/${formattedDate}.json` }]
  ]
})