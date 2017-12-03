let webpackConfig = require('./webpack.dev.config');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    basePath: './',

    files: [
      {pattern: 'src/**/*.spec.js'}
    ],

    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },

    webpack: webpackConfig,

    reporters: [
      'mocha'
    ],

    browsers: [
      'Chrome'
    ]
  });
};
