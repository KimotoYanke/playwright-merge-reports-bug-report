// @ts-check

/**
 * @typedef { import("@playwright/test/reporter").Reporter } Reporter
 * @typedef { import("@playwright/test/reporter").FullConfig } FullConfig
 * @typedef { import("@playwright/test/reporter").Suite } Suite
 */

/**
 * @implements {Reporter}
 */
class TestReporter {
  /**
   * @param { FullConfig } fullConfig
   * @param { Suite } suite
   */
  onBegin(fullConfig, suite) {
    console.log("reporter", fullConfig.reporter);
  }
}

module.exports = TestReporter;
