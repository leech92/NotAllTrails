import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchPayload, clearPark } from "../../actions/park_actions"
import SearchBar from "./search_bar";

const mSTP = state => ({
    parks: state.entities.parks
})

const mDTP = dispatch => ({
    fetchPayload: () => dispatch(fetchPayload()),
    clearPark: () => dispatch(clearPark())
})

export default withRouter(connect(mSTP, mDTP)(SearchBar))
