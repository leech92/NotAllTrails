import { RECEIVE_TRAIL, RECEIVE_TRAILS, CLEAR_TRAIL } from "../actions/trail_actions"

const trailsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TRAIL:
            return action.trail
        case RECEIVE_TRAILS:
            return action.trails
        case CLEAR_TRAIL:
            return {}
        default:
            return state
    }
}

export default trailsReducer