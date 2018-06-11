# Tumblr Theme Loader

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
