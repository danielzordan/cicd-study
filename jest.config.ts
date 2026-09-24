/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 *
 * Expo unit testing guide: https://docs.expo.dev/develop/unit-testing/
 */

import type { Config } from 'jest';

const config: Config = {
  // Handles the React Native / Expo transforms, module mapping and environment.
  preset: 'jest-expo',

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
};

export default config;
