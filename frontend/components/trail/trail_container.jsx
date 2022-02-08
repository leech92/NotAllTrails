import React from "react";
import { connect } from "react-redux";
import { fetchPayload, clearPark } from "../../actions/park_actions";
import { fetchTrail, clearTrail } from "../../actions/trail_actions";
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
        fetchPayload: () => dispatch(fetchPayload()),
        clearTrail: () => dispatch(clearTrail()),
        clearPark: () => dispatch(clearPark())
    }
}

export default connect(mSTP, mDTP)(Trail)