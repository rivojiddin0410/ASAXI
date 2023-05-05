import { combineReducers } from "redux";
import heart from "./heart";
import cart from "./cart";
import single from "./single"
const rootReducer = combineReducers({
    water: ()=> "Redux Water",
    heart,
    cart,
    single
})
export default rootReducer