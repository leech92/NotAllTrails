import React from "react";
import { connect } from "react-redux";
import Review from "./review"

const mSTP = state => {
    return {
        user: state.entities.users[state.session.currentUserId]
    }
}

export default connect(mSTP)