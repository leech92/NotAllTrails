import React from "react";
import Stars from "../shared/stars"

class Review extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { reviews, user, deleteReview, openModal} = this.props

        return(
            <div className="trail-reviews">
                <div className="review-header">
                    header
                </div>
                {reviews.map((review, idx) => (
                    <div key={idx} className="review">
                        <div className="review-top">
                            <img className="review-icon" src={window.icon} />
                            <div className="review-info">
                                info
                            </div>
                        </div>
                        <div className="review-bottom">
                            body
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Review