# Package Example :)

## Steps to bundle

- Install:
  - `yarn add -D rollup @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve`
  - `yarn add -D @babel/core @babel/plugin-transform-runtime`

- Add your `rollup.config.js` file as example in this repo

- Create a build command in package.json `"build": "rm -rf ./lib && rollup -c"`

## How to deploy your bundle?

### Logging to Github Registry for NPM

```sh
$ npm login --registry=https://npm.pkg.github.com
> Username: YOUR_GITHUB_USERNAME
> Password: TOKEN*
> Email: PUBLIC-EMAIL-ADDRESS
```

> TOKEN*: You must to [generate your own in your GitHub Settings](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

### Setup your package.json

```json
{
  "license": "MIT",
  // Your package name for install `yarn add @organization/package-name`
  "name": "@organization/package-name",
  "version": "0.0.2",
  "peerDependencies": {
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-scripts": "3.4.1",
    "styled-components": "5.1.1"
  },
  // Files that will be deployed
  "files": [
    "lib/components/Title"
  ],
  // Setting Github as registry for this package
  "publishConfig": {
    "registry":"https://npm.pkg.github.com/"
  },
  // Setting GitHub config relative to repository
  "repository": {
    "type": "git",
    "url": "git@github.com:organization/package-name.git"
  },
  "scripts": {
    // Build Command
    "build": "rm -rf ./lib && rollup -c",
  },
}
```

## Extras

- [Publishing multiple packages to the same repository](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#publishing-multiple-packages-to-the-same-repository)