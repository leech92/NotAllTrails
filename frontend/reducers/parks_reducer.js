import { RECEIVE_PARK, RECEIVE_PAYLOAD } from "../actions/park_actions"

const parksReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PARK:
            return Object.assign({}, state, {[action.park.id]: action.park})
        case RECEIVE_PAYLOAD:
            return action.payload.parks
        default:
            return state
    }
}

export default parksReducer