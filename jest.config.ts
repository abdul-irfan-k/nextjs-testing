import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config:Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // preset: "ts-jest",
  // transform:{"\\.[jt]sx?$": "babel-jest"},
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  setupFiles:['./jest-polyfills.js']
};

export default createJestConfig(config);
// module.exports = createJestConfig(config)