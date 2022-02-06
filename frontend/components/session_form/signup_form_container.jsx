import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup, login, clearSessionErrors } from "../../actions/session_actions";
import SessionForm from './session_form'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formTitle: "Create your free account",
        formType: "Sign Up",
        defaultState: {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        },
        switchText: "Already have an account?",
        switchLink: <Link to="/login" className="session-link">Log in</Link> 
    }
}

const mDTP = dispatch => {
    return {
        process: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)