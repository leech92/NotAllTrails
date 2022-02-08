import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import parksReducer from './parks_reducer'
import trailsReducer from './trails_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    parks: parksReducer,
    trails: trailsReducer
})

export default entitiesReducer