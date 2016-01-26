export const METADATAS = [
  'Monthly resolution',
  '162 updates',
  'Limit x reached',
];

export const METRICS = [
  {
    name: 'Metric 1',
    metadatas: [METADATAS[0]],
  },
  {
    name: 'Metric 2',
    metadatas: [
      METADATAS[1],
      METADATAS[0],
    ],
  },
  {
    name: 'Metric 3',
    metadatas: [
      METADATAS[1],
    ],
  },
  {
    name: 'Metric 4',
    metadatas: [
      METADATAS[2],
    ],
  },
  {
    name: 'Metric 5',
    metadatas: [
      METADATAS[2],
      METADATAS[0],
      METADATAS[2],
      METADATAS[0],
    ],
  },
  {
    name: 'Metric 6',
    metadatas: [
      METADATAS[1],
    ],
  },
  {
    name: 'Metric 7',
    metadatas: [
      METADATAS[0],
    ],
  },
  {
    name: 'Metric 8',
    metadatas: [
      METADATAS[0],
      METADATAS[1],
      METADATAS[2],
    ],
  },
];
