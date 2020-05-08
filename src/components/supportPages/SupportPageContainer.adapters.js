import { find, filter } from 'ramda';
import { buildPageProps, getContentModuleFields } from '../../adapters/pages.adapter';

const isHeader = cModule => {
  if(cModule.entryName) {
    return (cModule.entryName.indexOf('Header')) > 0
  } else if (cModule.entryTitle) {
    return (cModule.entryTitle.indexOf('Header')) > 0
  }
}

export const fetchContentModules = (props) => state => state && state.cmsData.cPages ? getContentModuleFields(buildPageProps(state.cmsData.cPages,props)) : [];
export const getHeaderAsset = cModules =>  cModules && cModules.length ? find(cm => isHeader(cm))(cModules) : {};
export const filterContentModules = cModules => cModules && cModules.length && filter(cm => !isHeader(cm))(cModules);