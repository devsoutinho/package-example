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

- Then run `npm publish`

## How to use the library?

- Create a .npmrc file, we need to use GitHub registry, only when we download our packages from GitHub
```js
// .npmrc
@organization:registry=https://npm.pkg.github.com/
```

- After it just type: `yarn add @organization/package-name`

## How to use a private package?
- The repository visibility defines if it's public or private
- If your repository is private, the users must be part of the organization to have access to download it throught github registry previously configured in `.npmrc`


## How to download GitHub Registry Packages on CI/CD tools?

- All projects that installs from an organization must have configured a .npmrc file
```sh
# .npmrc
@organizxation:registry=https://npm.pkg.github.com/
```

- On CI/CD tools in first step after the contained up an run, create .npmrc with access to GitHub credentials
```sh
echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN"> ~/.npmrc
```

# Extras

- [Publishing multiple packages to the same repository](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#publishing-multiple-packages-to-the-same-repository)
