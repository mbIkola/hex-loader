[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![chat][chat]][chat-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>HEX Loader</h1>
  <p>A loader for webpack that lets you import files as a hex-encoded string.</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev hex-loader
```

<h2 align="center">Usage</h2>

Use the loader either via your webpack config, CLI or inline.

### Via webpack config (recommended)

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'hex-loader'
      }
    ]
  }
}
```

**In your application**
```js
import txt from './file.txt';
```

### CLI

```bash
webpack --module-bind 'txt=hex-loader'
```

**In your application**
```js
import txt from 'file.txt';
```

### Inline

**In your application**
```js
import txt from 'hex-loader!./file.txt';
```

[npm]: https://img.shields.io/npm/v/hex-loader.svg
[npm-url]: https://npmjs.com/package/hex-loader

[node]: https://img.shields.io/node/v/hex-loader.svg
[node-url]: https://nodejs.org


[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
