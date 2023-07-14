# vite-macros

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

This is my package description.

## Usage

Install package:

```sh
# npm
npm install vite-macros

# yarn
yarn add vite-macros

# pnpm
pnpm install vite-macros
```

Import:

```js
import { defineConfig } from 'vite'
import ViteMacros from "vite-macros";

export default defineConfig({
    plugins: [
        ViteMacros()
    ],
})
```

Usage:

```js
const data = include_str!('data.json');
```

## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vite-macros?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/vite-macros
[npm-downloads-src]: https://img.shields.io/npm/dm/vite-macros?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/vite-macros
[codecov-src]: https://img.shields.io/codecov/c/gh/KABBOUCHI/vite-macros/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/KABBOUCHI/vite-macros
[bundle-src]: https://img.shields.io/bundlephobia/minzip/vite-macros?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=vite-macros
[license-src]: https://img.shields.io/github/license/KABBOUCHI/vite-macros.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/KABBOUCHI/vite-macros/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/vite-macros
