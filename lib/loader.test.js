import { describe, it } from 'mocha';
import { expect } from 'chai';

import compiler from './compiler.js';
import loader from './loader.js';
import tumblrData from './fixtures/tumblr.json';

import fs from 'fs';

describe('loader', () => {
  const expected = 'export default "<div>\\n\\n    <article id=\\"232\\">\\n\\n        <h1>An example post</h1>\\n        <p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam nisi lorem, pulvinar id, commodo feugiat, vehicula et, mauris. Aliquam mattis porta urna. Maecenas dui neque, rhoncus sed, vehicula vitae, auctor at, nisi.</p></p>\\n\\n    </article>\\n\\n</div>\\n"';

  it('should work', () => {
    const source = fs.readFileSync(`${__dirname}/fixtures/tumblr.html`);
    const output = loader.call({ query: { tumblrData } }, source.toString());

    expect(output).to.be.equal(expected);
  });

  it('should work with webpack', () => {
    return compiler('fixtures/tumblr.html', { tumblrData })
      .then(stats => {
        const output = stats.toJson().modules[0].source;

        expect(output).to.be.equal(expected);
      });
  });
});
