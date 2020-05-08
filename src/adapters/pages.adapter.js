import { map, pipe, filter, find, propEq } from 'ramda';
const extractModule = map(cm => cm.cModulePage);
export const buildPageProps = (cModules, url) => find(propEq('url', url))(extractModule(cModules));
export const getContentModuleFields = (page = []) => map(cModule => ({...cModule.fields, type: cModule.sys.contentType.sys.id}))(page.contentModules || [])