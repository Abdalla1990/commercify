
export const POST_MODULES = "POST_MODULES";
export const POST_PAGES = "POST_PAGES";
export const SET_ACTIVE_ACCOUNT = "SET_ACTIVE_ACCOUNT";
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const REMOVE_ACCOUNT = "REMOVE_ACCOUNT";
export const SET_INACTIVE_ACCOUNT = "SET_INACTIVE_ACCOUNT";

export const postModules = (modules)=>({key: 'cModules', type:POST_MODULES,modules});
export const postPages = pages => ({key: 'cPages', type:POST_PAGES,pages})
export const setactiveaccount = (id)=>({type:SET_ACTIVE_ACCOUNT,id});
export const addaccount = (name)=>{
    let account = {id : Math.random() , name , active : false}
    return ({type:ADD_ACCOUNT,account})
};
export const removeaccount = (id)=>({type:REMOVE_ACCOUNT,id});
export const setinactiveaccount = ()=>({type:SET_INACTIVE_ACCOUNT});



