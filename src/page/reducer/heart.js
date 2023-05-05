import { ADD_TO_HEART, REMOVE_FROM_HEART ,REMOVE_ALL_FROM_HEART} from "../action/actionType"

const heart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_HEART:
            return state = [...state, action.payload]
        case REMOVE_FROM_HEART:
            return state = state.filter(item => item.id !== action.payload.id)
            case REMOVE_ALL_FROM_HEART :
                return state = []
        default:
            return state
    }
}
export default heart