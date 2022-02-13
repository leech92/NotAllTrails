import * as TrailAPIUtil from "../util/trail_api_util"

export const RECEIVE_TRAIL = "RECEIVE_TRAIL"
export const CLEAR_TRAIL = "CLEAR_TRAIL"

const receiveTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
})

const removeTrail = () => ({
    type: CLEAR_TRAIL
})

export const fetchTrail = trailId => dispatch => {
    return TrailAPIUtil.fetchTrail(trailId)
        .then(trail => {
            dispatch(receiveTrail(trail))
        })
}

export const clearTrail = () => dispatch => (
    dispatch(removeTrail())
)

export const createReview = review => dispatch => {
    return TrailAPIUtil.createReview(review)
        .then(trail => {
            dispatch(receiveTrail(trail))
        })
}

export const updateReview = review => dispatch => {
    return TrailAPIUtil.updateReview(review)
        .then(trail => {
            dispatch(receiveTrail(trail))
        })
}

export const deleteReview = reviewId => dispatch => {
    return TrailAPIUtil.deleteReview(reviewId)
        .then(trail => {
            dispatch(receiveTrail(trail))
        })
}