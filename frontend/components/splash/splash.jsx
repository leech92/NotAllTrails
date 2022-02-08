import React from "react";
import SearchBarContainer from "../search/search_bar_container";

const Splash = ({currentUser}) => {
    return (
        <div className="splash-container">
            <div className="splash-search">
                {(currentUser) ? 
                    <p className="splash-text">Ready to do this, {currentUser.first_name}?</p> :
                    <p className="splash-text">Find your next trail</p>}
                <SearchBarContainer />
            </div>
            <div className="splash-info">
                <div className="splash-info-container">
                    <p className="splash-info-bold">Empower the next generation of conservationist leaders</p>
                    <p>We support the Student Conservation Association in uniting young people with hands-on environmentalist challenges.</p>
                </div>
                <div className="splash-info-container">
                    <p className="splash-info-bold">10,000 trees (and counting)</p>
                    <p>From our birthday to employee anniversaries, we celebrate by giving to One Tree Planted.</p>
                </div>
                <div className="splash-info-container">
                    <p className="splash-info-bold">No trace on the trail</p>
                    <p>As a Leave No Trace partner, we're commited to keeping outdoor spacs clean, safe, and kind.</p>
                </div>
            </div>
        </div>
    )
}

export default Splash