[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![chat][chat]][chat-url]

<div align="center">

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="200"
   height="200"
   id="svg2"
   version="1.1"
   inkscape:version="0.48.2 r9819"
   sodipodi:docname="New document 1">
  <defs
     id="defs4" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.765"
     inkscape:cx="101.66909"
     inkscape:cy="64.929256"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     showborder="false"
     inkscape:showpageshadow="false"
     inkscape:window-width="1132"
     inkscape:window-height="961"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="0" />
  <metadata
     id="metadata7">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-193.20113,-609.30267)">
    <g
       id="g3829">
      <g
         transform="translate(-61.473095,237.81998)"
         id="g3821">
        <rect
           style="fill:#000000;fill-opacity:1;stroke:none"
           id="rect2998"
           width="120.67989"
           height="19.546741"
           x="298.017"
           y="434.23184"
           ry="0" />
        <rect
           style="fill:#000000;fill-opacity:1;stroke:none"
           id="rect2998-1"
           width="120.67989"
           height="19.546741"
           x="290.65155"
           y="488.76447"
           ry="0" />
        <rect
           style="fill:#000000;fill-opacity:1;stroke:none"
           id="rect2998-7"
           width="183.60896"
           height="19.546741"
           x="384.33142"
           y="-455.46609"
           ry="0"
           transform="matrix(-0.13731609,0.99052728,-1,0,0,0)" />
        <rect
           style="fill:#000000;fill-opacity:1;stroke:none"
           id="rect2998-7-4"
           width="183.60896"
           height="19.546741"
           x="384.04288"
           y="-406.21848"
           ry="0"
           transform="matrix(-0.13731609,0.99052728,-1,0,0,0)" />
      </g>
      <rect
         y="609.30267"
         x="193.20113"
         height="200"
         width="200"
         id="rect3827"
         style="fill:none;stroke:none" />
    </g>
  </g>
</svg>

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
