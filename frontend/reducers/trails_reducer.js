import { RECEIVE_TRAIL, RECEIVE_TRAILS } from "../actions/trail_actions"

const trailsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TRAIL:
            return action.trail
        case RECEIVE_TRAILS:
            return action.trails
        default:
            return state
    }
}

export default trailsReducer