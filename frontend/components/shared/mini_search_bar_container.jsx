import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchPayload, clearPark } from "../../actions/park_actions"
import MiniSearchBar from "./mini_search_bar";

const mSTP = state => ({
    parks: state.entities.parks
})

const mDTP = dispatch => ({
    fetchPayload: () => dispatch(fetchPayload()),
    clearPark: () => dispatch(clearPark())
})

export default withRouter(connect(mSTP, mDTP)(MiniSearchBar))