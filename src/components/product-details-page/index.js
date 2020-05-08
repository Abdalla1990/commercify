import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ProductCarousel from '../ProductCarousel';
import history from '../tools/history';
import Breadcrumps from '../Breadcrumps';
import ShopTheProduct from '../ShopTheProduct';
import dispatcher from '../tools/dispatcher';
import { updateCart } from '../../actions/cart';
import { checkVariant } from '../tools/product.api';
import { buildPageProps, getContentModuleFields } from '../../adapters/pages.adapter';
import Injector from '../Injector';
import { toggleCart } from '../../actions/cart';
import { selectInitialRelatedProducts } from '../../selector/pdp.selectors';
import { useScrollBody } from '../../hooks/scroll.hook';

const Pdp = ({dispatch, contentModules, product}) => {
  const framesImagesMap = {
    'No Frame': 3,
    'Black Frame': 4,
    'Silver Frame': 5,
    'Golden Frame': 6,
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const [cart, setCart] = useState({
    productId: '',
    quantity: 1,
    size: '',
    frame: '',
  });
  const [selectedVariant, setVariant] = useState(undefined);

  useScrollBody(product.id);

  const checkVariantAvailiability = (size, frame) => {
    const variants = product.variants;
    let variant;
    if(variants !== undefined && size !== '' && frame !== '') {
      variant = checkVariant(size, frame, variants) 
    }

    variant !== undefined && setVariant(variant);
  }
  const onSizeChange = (e) => {
    console.log('value', e);
    const productId = product.id;
    const size = e.label;
    setCart({...cart, productId, size})
    checkVariantAvailiability(size, cart.frame)
  }
  const onFrameChange = (e) => {
    console.log('value', e);
    const frame = e.label;
    const productId = product.id;
    setCart({...cart, productId, frame})
    checkVariantAvailiability(cart.size, frame)
  }
  const onQuantityChange = (quantity) => {
    console.log('value', quantity);
    const productId = product.id;
    quantity < 1 && setCart({...cart, productId, quantity: 1})
    quantity >= 1 && setCart({...cart, productId, quantity})
  }
  const onAddToCart = () => {
    const frameImage = product.images && framesImagesMap[cart.frame] && product.images[framesImagesMap[cart.frame]] || undefined;
    const collectedCartElements = {
      ...cart,
      ...selectedVariant,
      title: product.title,
      frameImage,
    }
    dispatcher(dispatch, updateCart, collectedCartElements).then(() => dispatcher(dispatch, toggleCart, true));
  }
  const onImageSelectedChange = value => {
    value > 4 ? setSelectedImage(0): setSelectedImage(value)
  }
  return (
  <div className="c-pdp-container">
  {
    product !== undefined && product.images ?
    (<div className="c-pdp-inner">
      <div className="c-pdp-content-container">
        <div className="c-pdp-product-info-container">
          <Breadcrumps />
          <h2 className="c-pdp-product-title">{product.title}</h2>
          <div className="c-plp-product-price-range">
            <div className="c-plp-product-price-range_from">CAD{product.priceRange.from}</div>
            <div className="c-plp-product-price-range_separetor"></div>
            <div className="c-plp-product-price-range_to">CAD{product.priceRange.to}</div>
          </div>
          <p className="c-pdp-product-description" >{product.description}</p>
          <div>
            <ShopTheProduct
              sizes={product.options[0]}
              frames={product.options[1]}
              onAddToCart={ onAddToCart }
              onSizeChange={ onSizeChange }
              onFrameChange={ onFrameChange }
              selectedSize={cart.size}
              selectedFrame={cart.frame}
              quantityValue={cart.quantity}
              onQuantityChange={onQuantityChange}
              variant={selectedVariant}
              />
              <div> The SKU of the product is {product.id} </div>
          </div>
        </div>
        <div className="c-pdp-image-container c-pdp-product-carousel">
          <ProductCarousel images={product.images.slice(2,7)} selectedItem={selectedImage} onChange={onImageSelectedChange}/>
        </div>
      </div>
      { contentModules && 
        <Injector contentModules={contentModules}/>
      }
    </div>) :
    (
      
          <div className="c-pdp-product-info-container">
            LOADING 
          </div>
    )
  }
  </div>
)}

const mapStateToProps = state => {
  return {
    previouslyBrowsedProduct : state.previouslyBrowsedProduct,
    product: {...selectInitialRelatedProducts(state.route, state.collections)},
    contentModules : state.cmsData.cPages && getContentModuleFields(buildPageProps(state.cmsData.cPages,'/collections/collectionid/productid')),
  }
}
export default connect(mapStateToProps)(Pdp);