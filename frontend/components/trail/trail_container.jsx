import React from "react";
import { connect } from "react-redux";
import { fetchPayload } from "../../actions/park_actions";
import { fetchTrail } from "../../actions/trail_actions";
import Trail from "./trail"

const mSTP = (state) => {
    return {
        trail: state.entities.trails,
        parks: state.entities.parks
    }
}

const mDTP = dispatch => {
    return {
        fetchTrail: trailId => dispatch(fetchTrail(trailId)),
        fetchPayload: () => dispatch(fetchPayload())
    }
}

export default connect(mSTP, mDTP)(Trail)