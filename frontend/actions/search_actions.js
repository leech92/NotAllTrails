import { fetchSearch } from "../util/search_api_util";

export const RECEIVE_SEARCH = "RECEIVE_SEARCH"

const receiveSearch = payload => ({
    type: RECEIVE_SEARCH,
    payload
})

export const fetchSearches = () => dispatch => {
    return fetchSearch()
        .then(payload => {
            dispatch(receiveSearch(payload))
        })
}