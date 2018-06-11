const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const parser = require('tumblr-theme-parser');

const schema = require('./schema.json');

module.exports = function loader (source) {
  const options = loaderUtils.getOptions(this);
  const { tumblrData } = options;

  validateOptions(schema, options, 'Tumblr Theme Loader');
  source = parser.compile(source, tumblrData);

  return `module.exports = ${JSON.stringify(source)}`;
};
