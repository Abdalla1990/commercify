

export default (dispatch,action,params)=>{

    
    let promise = new Promise((resolve,reject)=>{
        
        try{
           
            if(dispatch == undefined || typeof dispatch !== 'function'){

                console.warn('no dispatch function passed');
                reject('no dispatch function passed');
            }
        
            if( action == undefined){
        
                console.warn('no action object/generator passed');
                reject('no action object/generator passed');
            }
        
            if(params !== undefined){
                
                dispatch(action(params));

            }else{

                dispatch(action());

            }
            
            resolve();
        
        }catch (e){
            
            reject(e);

        }
        
    })

    return promise;
}