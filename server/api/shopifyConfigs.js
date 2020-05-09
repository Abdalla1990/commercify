
module.exports = {
  url : 'https://barigallery.myshopify.com/api/graphql',
  headers : {
    'Content-Type': 'application/graphql',
    'X-Shopify-Storefront-Access-Token': process.env.shopifyKey
  },
}