import React from "react";
import { Link } from "react-router-dom";

class Top extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { location, parkId } = this.props

        return(
            <div className="top">
                <div className="top-left">
                    {location.map((place, idx) => {
                        if (idx < 2){
                            return (
                                <div key={idx} className="top-place">
                                    <div>{place}</div>
                                    <div className="next">{'>'}</div>
                                </div>
                            )
                        } else if (idx === location.length - 1){
                            return (
                                <div key={idx} className="top-place">
                                    <div>{place}</div>
                                </div>
                            )
                        } else{
                            return (
                                <div key={idx} className="top-place">
                                    <Link to={`/parks/${parkId}`}>{place}</Link>
                                    <div className="next">{'>'}</div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Top