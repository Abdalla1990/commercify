import readJson from './readJson';
import { postModules, postPages } from '../../actions/cms';
import { dispatchRequestCollectionsData } from '../../actions/collections';
import dispatcher from './dispatcher';
import { changeRoute } from '../../actions/router';
export default (dispatch, pathname)=>{
    dispatcher(dispatch, changeRoute, pathname);
    readJson().then((res)=>{
        let cmsData = res.data;
        if(cmsData){
            dispatcher(dispatch, postModules, cmsData['cmsModules'])
            .then(dispatcher(dispatch,postPages, cmsData['cmsPages']))
            .then(dispatcher(dispatch, dispatchRequestCollectionsData))
            .catch((e)=>console.warn(e));
        }
    });
}