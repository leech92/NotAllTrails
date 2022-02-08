import { RECEIVE_PARK, RECEIVE_PAYLOAD, CLEAR_PARK } from "../actions/park_actions"

const parksReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PARK:
            // debugger
            return action.park
        case RECEIVE_PAYLOAD:
            // debugger
            return action.payload
        case CLEAR_PARK:
            // debugger
            return {}
        default:
            return state
    }
}

export default parksReducer