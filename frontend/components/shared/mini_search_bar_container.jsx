import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchSearches } from "../../actions/search_actions"
import MiniSearchBar from "./mini_search_bar";

const mSTP = state => ({
    parks: state.entities.search
})

const mDTP = dispatch => ({
    fetchSearches: () => dispatch(fetchSearches())
})

export default withRouter(connect(mSTP, mDTP)(MiniSearchBar))