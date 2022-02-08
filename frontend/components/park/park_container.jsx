import React from "react";
import { connect } from "react-redux";
import { fetchPark } from "../../actions/park_actions";
import Park from "./park"

const mSTP = (state) => {
    return {
        park: state.entities.parks
    }
}

const mDTP = dispatch => {
    return {
        fetchPark: parkId => dispatch(fetchPark(parkId))
    }
}

export default connect(mSTP, mDTP)(Park)