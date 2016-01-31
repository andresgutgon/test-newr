import _ from 'underscore';

export default function generateRandomMetadatas(metadatas) {
  const used_indexes = [];
  return _.compact(_.range(_.random(1, metadatas.length)).map((item) => {
    const index = _.random(0, metadatas.length -1);
    if (_.contains(used_indexes, index)) return;

    used_indexes.push(index);
    return metadatas[index];
  }));
}
