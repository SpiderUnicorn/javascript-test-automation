module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts'
    ],

    tests: [
      'test/**/*spec.ts'
    ],

    env: {
      type: 'node'
    },

    debug: true,
    testFramework: 'mocha'
  };
};
