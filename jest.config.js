module.exports = {
  clearMocks: true,

  coverageDirectory: ".coverage",
  collectCoverageFrom: [
      "src/**/*.js"
  ],
  coverageReporters: [
    "lcov"
  ]
};
