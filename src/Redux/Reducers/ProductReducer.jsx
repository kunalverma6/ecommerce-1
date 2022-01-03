import { ActionType } from "../Contants/Action-type";

const initialState={
    product:[]
}
export const ProductReducer=(state=initialState , {type ,payload})=>{
switch (type) {
    case ActionType.SET_PRODUCTS:
        return{...state, products:payload}
    

    default:
        return state
}
}

export const selectedProductReducer=(state={},{type ,payload})=>{
    switch (type) {
        case ActionType.SELECTED_PRODUCTS:
            return{...state,...payload}
         
            case ActionType.REMOVE_SELECTED_PRODUCTS:
                return{}        
    
        default:
           return state
    }
}