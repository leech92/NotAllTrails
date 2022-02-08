import { RECEIVE_TRAIL, RECEIVE_TRAILS } from "../actions/trail_actions"

const trailsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TRAIL:
            return Object.assign({}, state, {[action.trail.id]: action.trail})
        case RECEIVE_TRAILS:
            let nextState = Object.assign({}, state)

            action.trails.forEach(trail => (
                nextState[trail.id] = trail
            ))
            return nextState
        default:
            return state
    }
}

export default trailsReducer