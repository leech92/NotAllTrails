import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import parksReducer from './parks_reducer'
import trailsReducer from './trails_reducer'
import searchReducer from './search_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    parks: parksReducer,
    trails: trailsReducer,
    search: searchReducer
})

export default entitiesReducer