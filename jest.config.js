module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.[tj]s$": "babel-jest",
    ".*\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
  moduleFileExtensions: ["vue", "js", "ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  coverageReporters: ["text", "json-summary"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  setupFiles: ["<rootDir>/setupTests.ts"],
};
