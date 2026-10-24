const webpackConfig = require('./webpack.config');
webpackConfig.module.rules[0].options = {
  configFile: 'test/tsconfig-testing.json'
};

webpackConfig.module.rules.push({
    test: /\.ts(x?)$/,
    enforce: 'post',
    loader: '@jsdevtools/coverage-istanbul-loader',
    include: require('path').join(__dirname, 'src'),
    options: { esModules: true }
});
module.exports = function (config) {
  const newConfig = {
    basePath: '',
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'webpack'],
    reporters: ['mocha', 'coverage'],
    files: [
      'test/**/*.test.ts',
      'test/**/*.test.tsx'
    ],
    preprocessors: {
      'test/**/*.ts': ['webpack', 'sourcemap'],
      'test/**/*.tsx': ['webpack', 'sourcemap'],
      'src/**/*.tsx': ['webpack', 'sourcemap'],
      'src/**/*.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    coverageReporter: {
      reporters: [
        {
          type: 'json',
          dir: 'coverage/json',
          subdir: '.'
        },
        {
          type: 'html',
          dir: 'coverage/html-ts',
          subdir: '.'
        }
      ]
    },
    mochaReporter: {
      output: 'full'
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    singleRun: true
  };

  config.set(newConfig);
};
