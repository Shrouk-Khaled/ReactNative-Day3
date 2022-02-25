export function reducer(state = {}, action){
    // console.log(action)
   switch(action.type){
       case 'USER_LIST':{
           return {...state, userList: action.payload};
       }
       case 'USER_DETAILS':{
           return {...state, userDetails: action.payload};
       }
       case 'DETAILS_CLEAR':{
        return {...state, userDetails: {}};
       }
       default:{
           return state
       }
   }
        
}