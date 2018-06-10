import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import parser from 'tumblr-theme-parser';

import schema from './schema.json';

export default function loader (source) {
  const options = getOptions(this);
  const { tumblrData } = options;

  validateOptions(schema, options, 'Tumblr Theme Loader');
  source = parser.compile(source, tumblrData);

  return `export default ${JSON.stringify(source)}`;
}
