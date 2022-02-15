import React from "react";
import { Link } from "react-router-dom";
import Stars from "../shared/stars";

class RelatedTrails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { park, filteredTrails } = this.props

        let avgRatings = []
        filteredTrails.forEach(trail => {
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
            <div className="trail-relateds">
                <h1 className="trail-relateds-title">Nearby trails</h1>
                <div>
                {filteredTrails.map((relatedTrail, idx) => (
                    <Link key={idx} to={`/trails/${relatedTrail.id}`} className="trail-related">
                        <img className="trail-related-img" src={relatedTrail.photoURL} />
                        <h1 className="trail-related-title">{relatedTrail.trail_name}</h1>
                        <p className="trail-related-park">{park.park_name}</p>
                        <div className="trail-related-rating">
                            <span className={`trail-related-${relatedTrail.difficulty}`}>
                                {relatedTrail.difficulty}
                            </span>
                            <Stars className="trail-related-stars" options={options} rating={avgRatings[idx]} />
                            <p className="trail-related-amount">({relatedTrail.reviews.length})</p>
                        </div>
                        <div className="trail-related-length">
                            <p>Length: {relatedTrail.length} </p>
                            <span>&#8226;</span>
                            <p>{relatedTrail.duration}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
            
        )
    }
}

export default RelatedTrails