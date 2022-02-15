import React from "react";
import Stars from "../shared/stars"

class Review extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { reviews, avgRating, user, deleteReview, openModal} = this.props

        const options = {
            size: 20,
            isHalf: true,
            edit: false
        }

        return(
            <div className="trail-reviews">
                <div className="review-header">
                    <div className="review-header-left">
                        <p className="review-header-rating">{avgRating.toFixed(1)}</p>
                        <Stars className="review-header-stars" options={options} rating={avgRating}/>
                        <p className="review-header-length">{reviews.length} Reviews</p>
                    </div>
                    <div>
                        Write review
                    </div>
                </div>
                {reviews.map((review, idx) => (
                    <div key={idx} className="review">
                        <div className="review-top">
                            <img className="review-icon" src={window.icon} />
                            <div className="review-info">
                                <p className="review-name">{`${review.first_name} ${review.last_name}`}</p>
                                <div className="review-info-bot">
                                    <Stars className="review-stars" options={options} rating={review.rating}/>
                                    <p className="review-date">{new Date(review.date + " 00:00").toString().slice(4, 15)}</p>
                                </div>
                            </div>
                        </div>
                            <p className="review-body">{review.body}</p>
                            
                    </div>
                ))}
            </div>
        )
    }
}

export default Review