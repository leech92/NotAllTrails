import React from "react";
import { Link } from "react-router-dom";

class RelatedTrails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { park, filteredTrails } = this.props

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
                            Rating Placeholder
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