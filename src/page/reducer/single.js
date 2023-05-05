import {ADD_TO_CART,DECREMENT_FROM_CART} from "../action/actionType"
const single = (state = [], action) =>{
    const index = state?.findIndex((onItem) => onItem?.id === action?.payload?.id)
    switch(action.type){
        case ADD_TO_CART:
            if( index < 0){
                return state = [...state, {...action.payload, quantity: !1}]
            }else{
                return state?.map((onItem, inx) => inx === index ? {...onItem, quantity: onItem.quantity + 1} : onItem)
            }
            default:
                return state
    }
}
export default single