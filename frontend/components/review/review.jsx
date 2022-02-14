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
                                    <Stars options={options} rating={rating}/>
                                    <p>{review.date}</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-bottom">
                            <p>{review.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Review