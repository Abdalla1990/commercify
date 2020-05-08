const axios = require('axios');
const { generateDataString, generateCustomeDataString, generateCheckoutMutationString } = require('./generateDataString');
const {url , headers } = require('./shopifyConfigs');
const fetchCollections =  async () => {
  const dataString = generateDataString('collections')
  const options = {
    url,
    method: 'POST',
    headers,
    data: dataString
  };
  return await axios.request(options);
};

const fetchCollectionPatch =  async (type="collection", id, cursor = "") => {
  const dataString = generateCustomeDataString(type, id, cursor);
  const options = {
    url,
    method: 'POST',
    headers,
    data: dataString
  };
  return await axios.request(options);
};

const generateCheckout =  async ids => {
  const dataString = generateCheckoutMutationString(ids);
  // console.log(JSON.stringify(dataString));
  const options = {
    url,
    method: 'POST',
    headers,
    data: dataString
  };
  return await axios.request(options);
};

module.exports = {
  fetchCollections,
  fetchCollectionPatch,
  generateCheckout,
}
// const ShopifyClient = require('shopify-buy');
// const WooCommerce = require('woocommerce-api');
// const fetch = require('node-fetch');
// const btoa = require('btoa');
// const client = ShopifyClient.buildClient({
//   domain: 'springto.myshopify.com',
//   storefrontAccessToken: '6cff1594ffa7379b00a683c65b7991d8'
// }, fetch);

// const woocommerce = new WooCommerce({
//   url: 'https://www.barigallery.com',
//   consumerKey: 'ck_4a0922ab97b925a47e2b50beccbf90aaaa33d956',
//   consumerSecret: 'cs_7cfd9f7d87148d2119c79614b7d1c1d4ec359b9b',
//   wpAPI: true,
//   perPage: 1000,
//   version: 'wc/v1'
// });

// const fetchTags = async () => await client.connections.productTags();
// const fetchProducts = () => woocommerce.getAsync('products?per_page=100&category=163');