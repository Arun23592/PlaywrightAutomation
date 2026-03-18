// @ts-check
import { devices, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =  ({
  testDir: './tests',
  timeout: 30 *1000,
  expect : {
    timeout: 5000
  },

  reporter : 'html',

  
  // use: {
    
  //     browserName : 'chromium'
  //   /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  // },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport:{width:1920, height:8080}
        
       },
    },

    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'] },
    //     viewport:{width:1512, height:803}
    // },

    // {
    //   name: 'webkit',
    //   use: { 
    //     ...devices['Desktop Safari'] },
    //     viewport:{width:1512, height:803}
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],


});
module.exports = config