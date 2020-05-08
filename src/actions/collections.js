export const REQUEST_COLLECTIONS_DATA = "REQUEST_COLLECTIONS_DATA";
export const REQUEST_COLLECTION_PATCH = "REQUEST_COLLECTION_PATCH";
export const RECEIVE_COLLECTIONS_DATA = "RECEIVE_COLLECTIONS_DATA";
export const RECEIVE_COLLECTION_DATA = "RECEIVE_COLLECTION_DATA";
export const ERRO_COLLECTIONS_DATA_FETCH = "ERRO_COLLECTIONS_DATA_FETCH";
export const TWEETS_DATA_PENDING = "TWEETS_DATA_PENDING";


export const dispatchRequestCollectionsData = cursor => ({type : REQUEST_COLLECTIONS_DATA, cursor});
export const dispatchReceiveCollectionsData = data =>({type : RECEIVE_COLLECTIONS_DATA,data});
export const dispatchRequestCollectionData = ({dataType, id, cursor}) => ({type : REQUEST_COLLECTION_PATCH, data:{dataType, id, cursor}});
export const dispatchReceiveCollectionData = data =>({type : RECEIVE_COLLECTION_DATA,data});
export const dispatchTweetsDataPending = ()=>({type : TWEETS_DATA_PENDING});




