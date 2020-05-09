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
