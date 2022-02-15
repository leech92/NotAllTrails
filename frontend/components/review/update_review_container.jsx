import React from "react";
import { connect } from "react-redux";
import { updateReview } from "../../actions/trail_actions";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form"

const mSTP = (state, ownProps) => {
    return {
        review: {
            id: ownProps.review.id,
            trail_id: ownProps.review.trail_id,
            user_id: ownProps.review.user_id,
            rating: ownProps.review.rating,
            date: ownProps.review.date,
            body: ownProps.review.body
        },
        trail: state.entities.trails.trail_name
    }
}

const mDTP = dispatch => {
    return {
        action: review => dispatch(updateReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(ReviewForm)