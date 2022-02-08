import * as ParkAPIUtil from "../util/park_api_util"

export const RECEIVE_PARK = "RECEIVE_PARK"
export const RECEIVE_PAYLOAD = "RECEIVE_PAYLOAD"
export const CLEAR_PARK = "CLEAR_PARK"

const receivePark = park => ({
    type: RECEIVE_PARK,
    park
})

const receivePayload = payload => ({
    type: RECEIVE_PAYLOAD,
    payload
})

const removePark = () => ({
    type: CLEAR_PARK
})

export const fetchPark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
        .then(park => {
            dispatch(receivePark(park))
        })
}

export const fetchPayload = () => dispatch => {
    return ParkAPIUtil.fetchParks()
        .then(payload => {
            dispatch(receivePayload(payload))
        })
}

export const clearPark = () => dispatch => (
    dispatch(removePark())
)