import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, clearSessionErrors } from "../../actions/session_actions";
import SessionForm from './session_form'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formTitle: "Log in and let's get going",
        formType: "Login",
        defaultState: {
            email: "",
            password: ""
        },
        switchText: "Don't have an account?",
        switchLink: <Link to="/signup" className="session-link">Sign up for free</Link> 
    }
}

const mDTP = dispatch => {
    return {
        process: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)