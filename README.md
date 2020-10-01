![Logo of the project](./src/images/logo.svg)

# Channel-1 &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Channel-1 is a collections of useful widgets for running a larger food retail store according to lean principles.

## Getting started

1. Clone the respository to a directory of your choice `git clone https://github.com/evilpaper/channel-1.git`
2. Run run: `npm install` to install all the relevant dependencies
3. Start the frontend server by running: `npm run start` and visit `localhost:3000` in your browser.

## Workflow

- When working on a new feature or a bug fix, create a branch from the latest version of the `master`-branch.
- If you are working on a new feature, name the branch in the format: `feature/[actual-new-feature]`, so for example: `feature/weather-widget`. A bug fix should be named in the format: `bug/[what-has-been-fixed]`.
- When you've commited and pushed your new branch, create a new pull request where the target to merge into should be the `develop` branch. Assign a suitable reviewer.

## Styleguide

This repository is using Eslint to make sure that the code is correctly formatted and maintaining a certain hygene level. We are currently using [AirBnbs JavaScript Styleguide](https://github.com/airbnb/javascript). The linter will automatically run whenever you commit to the repository, if it detects certain errors or improvable code — it will stop the commit and let you make adjustments so that you can then re-commit.

## API

To retrieve or manipulate data in the backend, GraphQL is the chosen technology. When writing a new query for GraphQL, these should be placed in a `queries` folder co-located with the component or view that is using the query (see the home route/view for an example). The file should only contain a single query/mutation and be named in the same way as the query/mutation, e.g. `GetJobs`. REST is only used for login/authorization purposes.

## Styles / CSS

Styling of components and views is done by using [Styled Components](https://styled-components.com/).

## Building

```shell
# Install packages
npm install

# Build it
npm run build
```

## Database
Only local storage for now.

## Contributions
Contributions are welcome.

## Licensing
Channel-1 is licensed under the MIT license.
