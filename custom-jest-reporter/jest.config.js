module.exports = {
  // Only search for tests in the dist directory emitted by TypeScript
  roots: ['<rootDir>/dist'],

  // Include all .spec.js files generated by the TypeScript build
  testRegex: '.*.spec.js$',

  // Use default and custom reporter
  reporters: ['default', '<rootDir>/dist/tests/reporter.js']
};