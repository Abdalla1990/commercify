const { adaptProducts } = require('./shopify.products.adapter');
const { pipe, map, propOr, addIndex } = require('ramda');
const adaptCollections = collections => map( ({ node: collection }) => ({
  id : collection.id,
  products: collection.products ?adaptProducts(collection.products.edges) : [],
  artist: collection.title,
  description: collection.description,
  image: collection.image ? collection.image.originalSrc : undefined,
  hasNextPage: collection.products.pageInfo.hasNextPage,
  hasPreviousPage: collection.products.pageInfo.hasPreviousPage,
  cursor: collection.products.edges.length ? collection.products.edges[collection.products.edges.length-1].cursor : undefined,
}))(collections);

const adaptnewPatchCollections = ({ collectionByHandle: collection})  => ({
  id : collection.id,
  products: collection.products ?adaptProducts(collection.products.edges) : [],
  artist: collection.title,
  description: collection.description,
  image: collection.image ? collection.image.originalSrc : undefined,
  hasNextPage: collection.products.pageInfo.hasNextPage,
  hasPreviousPage: collection.products.pageInfo.hasPreviousPage,
  cursor: collection.products.edges.length ? collection.products.edges[collection.products.edges.length-1].cursor : undefined,
});


module.exports = {
  adaptCollections,
  adaptnewPatchCollections
}