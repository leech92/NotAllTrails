import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
)

const mSTP = state => (
    { loggedIn: Boolean(state.session.currentUserId) }
)

export const AuthRoute = withRouter(connect(mSTP, null)(Auth))