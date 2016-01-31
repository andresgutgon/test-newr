import expect from 'expect';

import generateRandomMetadatas from '../generate-random-metas';

let METADATAS;

describe('#generateRandomMetadatas', function () {
  before(function () {
    METADATAS = ['metada 1', 'metadata 2', 'metadata 3'];
  });

  it('generate betwen 1 and metadata max length metadatas', function () {
    const metas = generateRandomMetadatas(METADATAS);

    expect(metas.length).toBeLessThan(METADATAS.length + 1);
    expect(metas.length).toBeGreaterThan(0);
  });
});
