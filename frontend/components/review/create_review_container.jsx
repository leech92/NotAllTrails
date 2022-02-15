import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../actions/trail_actions";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form"

const mSTP = (state, ownProps) => {
    return {
        review: {
            trail_id: state.entities.trails.id,
            user_id: state.session.currentUserId,
            rating: 0,
            date: new Date().toString().slice(4, 15),
            body: ''
        },
        trail: state.entities.trails.trail_name
    }
}

const mDTP = dispatch => {
    return {
        action: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(ReviewForm)