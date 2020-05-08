const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const { adaptCollections, adaptnewPatchCollections } = require('./adapters/shopify.collections.adapter');
const { adaptCmsModules } = require('./adapters/cms.adapter');
const { fetchContentfulType  } = require('./api/fetchContentfulData');
const { fetchCollections, fetchCollectionPatch, generateCheckout } = require('./api/fetchShopifyData');
const { cacheData, getCache } = require('./cache/cache');
app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get('/fetch/contenful',(req,res)=>{
  
  Promise.all([
    fetchContentfulType('cModulePage'),
    fetchContentfulType(),
  ]).then((response) => {
    const cmsPages = adaptCmsModules(response[0].items);
    const cmsModules = adaptCmsModules(response[1].items);
    const cmsEssentialContent = {
      cmsPages,
      cmsModules,
      // cmsMenu,
    }
    res.status(200).send(cmsEssentialContent);
  })
  .catch(console.error)
  
  
})

app.get('/store/',(req,res)=>{
  // console.log('Heeey : ' ,req);
  // const collections = getCache('collections');
  // console.log(' is it cached ? ', collections);
  // const shopifyEssentialContent = {
  //   collections,
  // }
  // collections !== undefined ?
  // res.status(200).send(JSON.stringify(shopifyEssentialContent)) :
  Promise.all([
    fetchCollections(),
    // fetchTags(),
    // fetshProducts(),
  ]).then((response) => {
    // console.log('req : ', response[0].data.data.shop.collections.edges[0].node.products);
    const collections = adaptCollections(response[0].data.data.shop.collections.edges);
    const cached = cacheData("collections", collections);
    console.log('cached:',cached)
    const shopifyEssentialContent = {
      collections,
      // products: products,
    }
    res.status(200).send(JSON.stringify(shopifyEssentialContent));
  })
  .catch((err) => res.status(400).send({error: err}))
});

app.get('/fetch', (req, res)=> {
  console.log('req : ', req.query.currentCursor, req.query.type, req.query.id);
  const newPatch = getCache(req.query.currentCursor);
  console.log(' is it cached ? ', newPatch);
  newPatch !== undefined ?
  res.status(200).send({[newPatch.artist]:newPatch}) :
  Promise.all([
    fetchCollectionPatch(req.query.type, req.query.id, req.query.currentCursor),
    // fetchTags(),
    // fetshProducts(),
  ]).then((response) => {
    console.log('req : ', response[0]);
    const newPatch = adaptnewPatchCollections(response[0].data.data.shop);
    const cached = cacheData(req.query.currentCursor, newPatch);
    console.log('cached:',cached)
    // console.log('req : ', newPatch);
    res.status(200).send({[newPatch.artist]:newPatch});
  })
  .catch(console.error)
})

app.post('/checkout', (req,res) => {
  const variantIds = Object.entries(req.body.data).map(( [, entry]) => ({variantId: entry.id.toString(), quantity: entry.quantity}))
  Promise.all([
    generateCheckout(variantIds),
  ]).then((response) => {
    response[0].data.data && res.status(200).send(response[0].data.data);
    response[0].data.errors && res.status(400).send(response[0].data.errors);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
})

app.get('/*', (req, res) => {
  res.sendFile(publicPath + '/index.html');
});


app.listen(port, () => {
    console.log(`api is running on ${port} go to http://localhost:8080/ to if you runned 'npm run dev_api' `);
})