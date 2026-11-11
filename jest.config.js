export default {
  testEnvironment: 'node',

  collectCoverageFrom: [
    'src/filter.js',
    'src/chunk.js',
    'src/slice.js',
    'src/get.js',
    'src/every.js',
    'src/isEmpty.js',
    'src/upperFirst.js',
    'src/toNumber.js',
    'src/add.js',
    'src/reduce.js'
  ],

  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/\\.internal/'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'text',
    'lcov',
    'html'
  ]
};
