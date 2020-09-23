module.exports = {
  displayName: {
    name: "prototype-jest",
    color: "bgBlue",
  },
  preset: "ts-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "@models": "<rootDir>/server/src/models/index",
  },
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/jest.config.js",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  verbose: true,
  watchPlugins: [
    "jest-watch-master",
    "jest-watch-select-projects",
    "jest-watch-suspend",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
