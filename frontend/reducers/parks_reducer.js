import { RECEIVE_PARK, RECEIVE_PAYLOAD } from "../actions/park_actions"

const parksReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PARK:
            return action.park
        case RECEIVE_PAYLOAD:
            debugger
            return action.payload
        default:
            return state
    }
}

export default parksReducer