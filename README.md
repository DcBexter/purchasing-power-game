# No pain, no gain?

Historical newsgame created at the Deutsche Welle hackathon in Bonn. Preserved as a portfolio project on the `skeleton` branch.

Original [AWS demo](https://s3.eu-central-1.amazonaws.com/bonn-hackathon/index.html), not verified as a current deployment.

## Build and test

Preact 8 and Bootstrap 4 remain the historical UI. Build uses Node 24, TypeScript 6, Webpack 5 and Dart Sass. Run `npm ci`, `npm run build`, `npm run prod` and `npm test`. `npm run dev` serves `public/` on port 4200. Karma needs Chrome/Chromium; set `CHROME_BIN` when its executable is outside the standard location.

Tests check event delivery and the welcome/calibration flow with simulated turns in a headless browser. `npm test` and `npm run test:cover` produce source-mapped TypeScript coverage in `coverage/json/` and `coverage/html-ts/`. `npm run test:debug` watches tests in visible Chrome. These checks do not calibrate real device-motion input.

TypeScript 7 replaces the JavaScript compiler API needed by `ts-loader`: the attempted 7.0.2 build failed while reading `compiler.sys.fileExists`. TypeScript 6.0.3 is the working compiler here. Renovate remains free to propose newer majors; build and test checks decide compatibility. Sass reports deprecations from historical Bootstrap and `@import` syntax.

## Maintenance

PRs, pushes to `skeleton` and weekly runs validate workflows, JavaScript config syntax and JSON files, install the locked dependencies, build development and production bundles, and run the browser tests with coverage. CodeQL scans JavaScript/TypeScript; dependency review checks recognized manifests.

Renovate proposes CI and npm application dependency updates. Coupled build and test packages share one update group, including major and minor updates, so incompatible loader/compiler versions are checked together. All managed updates, including major, application and security updates, may auto-merge after **Required maintenance** and **CodeQL** pass. Dependabot handles available security updates. Real-device gameplay and deployment compatibility remain unverified.

No publishing, automatic production deployment or release. Scheduled workflow and update configuration become effective after merge.
