# Tumblr Theme Loader

[![npm](https://img.shields.io/npm/v/tumblr-theme-loader.svg)](https://npmjs.com/package/tumblr-theme-loader)
[![deps](https://david-dm.org/ruslankhh/tumblr-theme-loader.svg)](https://david-dm.org/ruslankhh/tumblr-theme-loader)
[![build](https://travis-ci.com/ruslankhh/tumblr-theme-loader.svg)](https://travis-ci.com/ruslankhh/tumblr-theme-loader)
[![cover](https://codecov.io/gh/ruslankhh/tumblr-theme-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/ruslankhh/tumblr-theme-loader)
[![style](https://img.shields.io/badge/code%20style-standard-yellow.svg)](http://standardjs.com)

Tumblr theme loader for webpack. It uses [Tumblr Theme Parser](https://github.com/carrot/tumblr-theme-parser) for parsing.

## Install

```bash
npm i -D tumblr-theme-loader
```

## Usage

**webpack.config.js**

```js
{
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'tumblr-theme-loader',
            options: {
              tumblrData
            }
          }
        ]
      }
    ]
  }
}
```

## Options

| Param | Type | Default | Description |
| --- | --- | --- | --- |
|`tumblrData`|`{Object}`| | Tumblr data. See more in [Tumblr Theme Parser](https://github.com/carrot/tumblr-theme-parser#usage). |
