import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
// import parksReducer from './parks_reducer'
// import hikesReducer from './hikes_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    // parks: parksReducer,
    // hikes: hikesReducer
})

export default entitiesReducer