import {ActionType} from "../Contants/Action-type"

export const setProduct=(products)=>{

    return{
        type: ActionType.SET_PRODUCTS,
        payload : products,
    }
}

export const selectedProduct=(product)=>{

    return{
        type: ActionType.SELECTED_PRODUCTS,
        payload : product,
    }
}

export const removeSelectedProduct=()=>{
    return{
        type:ActionType.REMOVE_SELECTED_PRODUCTS,
        
    }
}