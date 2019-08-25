// List of blog posts to render
const codeProjects = [
  {
    id          : 1,
    name        : 'sassy',
    description : 'a simple but powerful language for text interpolation',
    link        : 'https://github.com/jmsmistral/sassy'
  },
  {
    id          : 2,
    name        : 'data streaming',
    description : 'A docker-based data streaming PoC with Kafka, Spark, and Zeppelin',
    link        : 'https://github.com/jmsmistral/streaming-docker-poc'
  },
  {
    id          : 3,
    name        : 'tpose',
    description : 'transpose or "pivot" delimited text files in parallel',
    link        : 'https://github.com/jmsmistral/tpose'
  },
  {
    id          : 4,
    name        : 'btree',
    description : 'in-memory btree library in C',
    link        : 'https://github.com/jmsmistral/btree'
  },
  {
    id          : 5,
    name        : 'pguess',
    description : '[in dev] data type guessing and DDL script generation for delimited text files',
    link        : '#'
  },
];

module.exports = {
  codeProjects,
};
