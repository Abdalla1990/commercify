import { pipe, map,find, propEq, filter, replace,} from 'ramda';
export const checkVariant = (size, frame, variants) => { 
  const title = `${size} / ${frame}`;
  return find( variant => propEq('title', title)(variant))(variants);
};
export const cleanFilterString =  string => string !== undefined ? replace('_',' ',string).toLowerCase() : string;
