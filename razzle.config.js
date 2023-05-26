'use strict';

module.exports = {
  options: {
    buildType: 'single-page-application',
  },
  modifyWebpackConfig({
    webpackConfig
  }) {
    return  {
      ...webpackConfig,
      resolve: {
        ...webpackConfig.resolve,
        fallback: {
          "util": require.resolve("util/"),
          "stream": require.resolve("stream-browserify"),
          "crypto": require.resolve("crypto-browserify")
        }
      }
    }
  }
};
