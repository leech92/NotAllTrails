import React from "react";
import { Link } from "react-router-dom";
import Stars from "../shared/stars";

class ParkTrails extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        const { trails, park } = this.props
        let avgRatings = []
        trails.forEach(trail => {
            let rating = 0
            trail.reviews.forEach(review => rating += review.rating)
            avgRatings.push(rating / trail.reviews.length)
        })

        const options = {
            size: 20,
            isHalf: true,
            edit: false
        }
        
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
                                <Stars className="park-trail-stars" options={options} rating={avgRatings[idx]} />
                                <p className="park-trail-amount">({trail.reviews.length})</p>
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