import React from "react";
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions'
import NavBar from './nav_bar'

const mapSTP = state => {
    if (state.session.currentUserId) {
        return {
            currentUser: state.session.currentUserId
        }
    }else {
        return {
            currentUser: null,
        }
    }
}

const mapDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(mapSTP, mapDTP)(NavBar)