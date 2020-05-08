const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const cacheData =  (key, value) => {
  return myCache.set(key, value);
}

const getCache =  key =>  myCache.get(key);
module.exports = {
  cacheData,
  getCache,
}