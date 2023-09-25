import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [
    [
      './.playwright/testReporter.js',
      {
        testAttributes: "A"
      },
    ],
  ],
};

export default config;
