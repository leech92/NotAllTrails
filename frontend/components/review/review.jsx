import React from "react";
import { withRouter } from "react-router";
import Stars from "../shared/stars"

class Review extends React.Component {
    constructor(props) {
        super(props)
        this.openModal = this.openModal.bind(this)
    }

    openModal(type) {
        if (this.props.user) {
            this.props.openModal(type)
        }else {
            debugger
            this.props.history.push('/login')
        }
    }

    render() {
        const { reviews, avgRating, user, deleteReview} = this.props

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
                    <button className="review-create" onClick={() => this.openModal({type: 'createReview'})}>Write review</button>
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
                        {user.id === review.user_id ? (
                            <div className="review-buttons">
                                <p className="review-button" onClick={() => deleteReview(review.id)}>Delete</p>
                                <p className="review-split">|</p>
                                <p className="review-button" onClick={() => this.openModal({type: 'updateReview', review: review})}>Edit</p>
                            </div>
                        ): 
                            null
                        }
                    </div>
                ))}
            </div>
        )
    }
}

export default withRouter(Review)