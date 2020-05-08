import { pipe, map, propEq, filter , head} from 'ramda';



export const selectInitialRelatedProducts = (path, collections) => pipe(
  extractPathName,
  extractedPath => ({ 
    filtered: filter( propEq('artist', extractedPath[2]), collections)[0], 
    extractedPath 
  }),
  ({ filtered, extractedPath }) => filtered && filtered.products ? filter( propEq('title', extractedPath[3]), filtered.products) : [],
  head,
  )(path)

const extractPathName = path => path.split('/');

