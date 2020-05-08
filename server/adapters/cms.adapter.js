const { pipe, map, propOr, addIndex } = require('ramda');

const adaptCmsModules = map( content => ({[content.sys.contentType.sys.id]: content.fields}));


module.exports = {
  adaptCmsModules,
}