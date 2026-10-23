# No pain, no gain?

Historical newsgame created at the Deutsche Welle hackathon in Bonn. Preserved as a portfolio project on the `skeleton` branch.

Original [AWS demo](https://s3.eu-central-1.amazonaws.com/bonn-hackathon/index.html), not verified as a current deployment.

## Historical stack

Preact 8, TypeScript 2, Webpack 3 and node-sass 4. Source uses device-motion input. Existing npm scripts describe the original build/dev/Karma setup; no modern Node, native node-sass or real-device compatibility is claimed. `test/` contains helpers but no `*.test.ts` or `*.test.tsx` suites.

## Maintenance

PRs, pushes to `skeleton` and weekly runs validate workflows, JavaScript config syntax and JSON files. CodeQL scans JavaScript/TypeScript; dependency review checks recognized manifests. These checks do not install or modernize the historical runtime, build the app or test gameplay/device sensors.

Renovate proposes CI and npm application dependency updates. Runtime changes remain manual because no current build/gameplay proof exists. GitHub Action digest refreshes may auto-merge after **Required maintenance** passes; action versions and application packages require review. Dependabot handles available security updates. Existing application vulnerabilities need a separate, tested modernization effort.

No publishing, automatic production deployment or release. Scheduled workflow and update configuration become effective after merge.
