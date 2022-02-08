import React from "react";
import { Link } from "react-router-dom";

class ParkTrails extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        const { trails, park } = this.props
        
        return(
            <div className="park-trails">
                <h1 className="park-trails-title">Top Trails ({trails.length})</h1>
                <div>
                {trails.map((trail, idx) => {
                    return(<Link key={idx} to={`/trails/${trail.id}`} className="park-trail">
                        <img className="park-trail-img" src={trail.photoURL} />
                        <div className="park-trail-info">
                            <h1 className="park-trail-title">{`#${idx + 1} - ${trail.trail_name}`}</h1>
                            <p className="park-trail-park">{park.park_name}</p>
                            <div className="park-trail-rating">
                                <span className={`park-trail-${trail.difficulty}`}>
                                    {trail.difficulty}
                                </span>
                                Rating Placeholder
                            </div>
                            <div className="park-trail-length">
                                <p>Length: {trail.length} </p>
                                <span>&#8226;</span>
                                <p>{trail.duration}</p>
                            </div>
                            <div className="park-trail-description">
                                <p className="park-trail-description-body">{trail.description}</p>
                                <p className="park-trail-description-show">Show more</p>
                            </div>
                        </div>
                    </Link>)
                })}
                </div>
            </div>
        )
    }
}

export default ParkTrails