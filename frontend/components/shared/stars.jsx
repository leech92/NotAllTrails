import React from "react";
import ReactStars from "react-rating-stars-component"

class Stars extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            options: this.props.options,
            onChange: this.props.onChange,
            rating: this.props.rating
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.rating !== prevProps.rating) {
            this.setState({rating: this.props.rating})
            window.location.reload()
        }
    }

    render() {
        return(
            <ReactStars {...this.state.options} onChange={this.state.onChange} value={this.state.rating} />
        )
    }
}

export default Stars