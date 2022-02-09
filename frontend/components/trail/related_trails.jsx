import React from "react";
import { Link } from "react-router-dom";

class RelatedTrails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { park, filteredtrails } = this.props

        return(
            <div className="trail-relateds">
                <h1 className="trail-relateds-title">Nearby trails</h1>
                <div>
                {filteredtrails.map((relatedtrail, idx) => (
                    <Link key={idx} to={`/trails/${relatedtrail.id}`} className="trail-related">
                        <img className="trail-related-img" src={relatedtrail.photoURL} />
                        <h1 className="trail-related-title">{relatedtrail.trail_name}</h1>
                        <p className="trail-related-park">{park.park_name}</p>
                        <div className="trail-related-rating">
                            <span className={`trail-related-${relatedtrail.difficulty}`}>
                                {relatedtrail.difficulty}
                            </span>
                            Rating Placeholder
                        </div>
                        <div className="trail-related-length">
                            <p>Length: {relatedtrail.length} </p>
                            <span>&#8226;</span>
                            <p>{relatedtrail.duration}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
            
        )
    }
}

export default RelatedTrails