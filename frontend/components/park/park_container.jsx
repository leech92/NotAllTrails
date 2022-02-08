import React from "react";
import { connect } from "react-redux";
import { fetchPark, clearPark } from "../../actions/park_actions";
import Park from "./park"

const mSTP = (state) => {
    return {
        park: state.entities.parks
    }
}

const mDTP = dispatch => {
    return {
        fetchPark: parkId => dispatch(fetchPark(parkId)),
        clearPark: () => dispatch(clearPark())
    }
}

export default connect(mSTP, mDTP)(Park)