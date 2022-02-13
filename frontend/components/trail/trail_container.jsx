import React from "react";
import { connect } from "react-redux";
import { fetchPayload, clearPark } from "../../actions/park_actions";
import { fetchTrail, clearTrail } from "../../actions/trail_actions";
import { openModal } from "../../actions/modal_actions"
import { deleteReview } from "../../actions/trail_actions";
import Trail from "./trail"

const mSTP = (state) => {
    return {
        trail: state.entities.trails,
        parks: state.entities.parks,
        user: state.entities.users[state.session.currentUserId]
    }
}

const mDTP = dispatch => {
    return {
        fetchTrail: trailId => dispatch(fetchTrail(trailId)),
        fetchPayload: () => dispatch(fetchPayload()),
        clearTrail: () => dispatch(clearTrail()),
        clearPark: () => dispatch(clearPark()),
        openModal: modal => dispatch(openModal(modal)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    }
}

export default connect(mSTP, mDTP)(Trail)