const { pipe, map, propOr, addIndex } = require('ramda');

const adaptProductImages = images => map( ({node: image}) => ({
  src: image.src
}))(images);

const adaptProductOptions = options => map( ({name, values}) => ({
  name, values
}))(options);

const adaptProductVariants = variants => map( ({node: variant}) => ({
  image: variant.image.src,
  price: variant.price,
  compareAtPrice: variant.compareAtPrice,
  selectedOptions: variant.selectedOptions,
  title: variant.title,
  id: variant.id
}))(variants);

const fetchPriceRange =  variants => ({from: variants[0].node.price, to: variants[variants.length - 1].node.price});
  
const adaptProducts = products => map( ({node: product}) => ({
  id : product.id,
  title: product.title,
  description: product.description,
  options: adaptProductOptions(product.options),
  images: adaptProductImages(product.images.edges),
  variants: adaptProductVariants(product.variants.edges),
  priceRange :fetchPriceRange(product.variants.edges)
}))(products);

module.exports = {
  adaptProducts,
}