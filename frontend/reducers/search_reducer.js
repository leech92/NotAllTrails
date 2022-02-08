import { RECEIVE_SEARCH } from "../actions/search_actions"

const searchReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SEARCH:
            return action.payload
        default:
            return state
    }
}

export default searchReducer