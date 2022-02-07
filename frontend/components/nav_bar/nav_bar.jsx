import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        this.props.logout(this.props.currentUser)
    }

    render() {
        const switchButtons = (
            this.props.currentUser ? (
                <div className="navbar-rightx">
                    <img className="navbar-icon" src={window.icon} />
                    <ul className="navbar-drop">
                        <li className="navbar-logout" onClick={this.handleLogout}>Logout</li>
                    </ul>
                </div>
            ) : (
                <div className="navbar-right">
                    <Link className="navbar-signup" to="/signup">Sign Up</Link>
                    <Link className="navbar-login" to="/login">Log In</Link>
                </div>
            )
        )

        return (
            <div className="navbar">
                <div className="navbar-left">
                    <Link className="navbar-explore" to="/">Explore</Link>
                    <Link className="navbar-saved" to="/">Saved</Link>
                </div>

                <div className="navbar-middle">
                    <Link className="navbar-home" to="/"><img className="navbar-logo" src={window.logo} />NotAllTrails</Link>
                </div>
                {switchButtons}
            </div>
        )
    }
}

export default NavBar