import React from "react";
import Stars from "../shared/stars";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            review: this.props.review
        }
        this.setRating = this.setRating.bind(this)
        this.setBody = this.setBody.bind(this)
        this.doAction = this.doAction.bind(this)
    }

    setRating(rating) {
        let nextState = this.state
        nextState.review.rating = rating
        this.setState(nextState)
    }

    setBody(body) {
        let nextState = this.state
        nextState.review.body = body
        this.setState(nextState)
    }

    doAction() {
        debugger
        this.props.action(this.state.review)
        this.props.closeModal()
    }

    render() {
        const options = {
            size: 50,
            isHalf: false,
            edit: true
        }

        const { rating, body } = this.state.review

        return(
            <div className="review-form-outer">
                <div className="review-form">
                    <div className="review-form-exit" onClick={this.props.closeModal}>x</div>
                    <p className="review-form-trail">{this.props.trail}</p>
                    <Stars className="review-form-rating" options={options} onChange={this.setRating} value={rating} />
                    <input
                        className="review-form-body"
                        type="text"
                        onChange={this.setBody}
                        value={body}
                        placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect."
                    />
                    {rating ? (
                        <div className="review-form-submit" onClick={this.doAction}>Post</div>
                    ) : (
                        <div className="review-form-no-submit">Post</div>
                    )}
                </div>
            </div>
        )
    }
}

export default ReviewForm