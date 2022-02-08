import * as ParkAPIUtil from "../util/park_api_util"

export const RECEIVE_PARK = "RECEIVE_PARK"
export const RECEIVE_PAYLOAD = "RECEIVE_PAYLOAD"

const receivePark = park => ({
    type: RECEIVE_PARK,
    park
})

const receivePayload = payload => ({
    type: RECEIVE_PAYLOAD,
    payload
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