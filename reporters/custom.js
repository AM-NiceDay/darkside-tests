const Mocha = require("mocha");
const { EVENT_TEST_FAIL, EVENT_TEST_PASS } = Mocha.Runner.constants;

class MyReporter {
  constructor(runner) {
    runner
      .on(EVENT_TEST_PASS, test => {
        console.log(`__TEST${test.title}PASSED__`);
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        console.log(`__TEST${test.title}FAILED__`);
      });
  }
}

module.exports = MyReporter;
