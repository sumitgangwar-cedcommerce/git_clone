
let initialState = JSON.parse(sessionStorage.getItem('state'))

export const userReducer = (state = initialState , action)=>{
    switch(action.type){
        case  'saveData' :
            return ({...action.payload})
        default :
            return {...state}
    }
}