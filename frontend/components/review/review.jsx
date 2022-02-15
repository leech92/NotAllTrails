import React from "react";
import Stars from "../shared/stars"

class Review extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { reviews, user, deleteReview, openModal} = this.props

        const options = {
            size: 15,
            isHalf: true,
            edit: false
        }

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
                                <p className="review-name">{`${user.first_name} ${user.last_name}`}</p>
                                <div className="review-info-bot">
                                    <Stars className="review-stars" options={options} rating={review.rating}/>
                                    <p className="review-date">{new Date(review.date + " 00:00").toString().slice(4, 15)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-bottom">
                            <p className="review-body">{review.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Review