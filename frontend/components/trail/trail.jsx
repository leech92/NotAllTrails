import React from "react";
import Stars from "../shared/stars";
import Top from "../shared/top";
import RelatedTrails from "./related_trails"
import Map from "../map/map";
import Review from "../review/review"

class Trail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPayload()
        this.props.fetchTrail(this.props.match.params.trailId)
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.trailId !== this.props.match.params.trailId) {
            this.props.fetchPayload()
            this.props.fetchTrail(this.props.match.params.trailId)
            window.scrollTo(0, 0)
        }
    }

    componentWillUnmount() {
        this.props.clearPark()
        this.props.clearTrail()
    }

    render() {
        if (!Object.keys(this.props.trail).length) return null
        if (!Object.keys(this.props.parks).length) return null
        if (Object.keys(this.props.parks).length !== 3) return null

        const { trail, parks, user } = this.props
        const reviews = trail.reviews
        let rating = 0
        reviews.forEach(review => rating += review.rating)
        const avgRating = rating / (reviews.length * (1.0))
        const park = parks[trail.park_id]
        const filteredTrails = park.trails.filter(filteredTrail => filteredTrail.id !== trail.id)
        const location = [`${park.country}`, `${park.state}`, `${park.park_name}`, `${trail.trail_name}`]

        const options = {
            size: 20,
            isHalf: true,
            edit: false
        }

        return(
            <div className="trail">
                <Top location={location} parkId={park.id} />
                <div className="trail-header">
                    <img className="trail-header-photo" src={trail.photoURL} />
                    <div className="trail-header-content">
                        <h1 className="trail-header-title">{trail.trail_name}</h1>
                        <div className="trail-header-rating">
                            <span className={`trail-header-${trail.difficulty}`}>
                                {trail.difficulty}
                            </span>
                            <Stars className="trail-stars" options={options} rating={avgRating} />
                            <p className="trail-length">({reviews.length})</p>
                        </div>
                        <p className="trail-header-park">{park.park_name}</p>
                    </div>
                    <div className="trail-header-buttons">
                        <a className="buttons-container" target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${trail.latitude},${trail.longitude}`}>
                            <img className="buttons-image" src={window.map} />
                            <p className="buttons-text">Directions</p>
                        </a>
                        <div className="buttons-container" onClick={() => window.print()}>
                            <img className="buttons-image" src={window.printer} />
                            <p className="buttons-text">Print</p>
                        </div>
                        <a className="buttons-container" target="_blank" href="https://www.facebook.com/">
                            <img className="buttons-image" src={window.share} />
                            <p className="buttons-text">Share</p>
                        </a>
                    </div>
                </div>
                <div className="trail-bottom">
                    <div className="trail-left">
                        <div className="trail-information">
                            <p className="trail-description">{trail.description}</p>
                            <div className="trail-statistics">
                                <div className="stat-container">
                                    <p className="stat-title">Length</p>
                                    <p className="stat-content">{trail.length} mi</p>
                                </div>
                                <div className="stat-container">
                                    <p className="stat-title">Elevation gain</p>
                                    <p className="stat-content">{trail.elevation} ft</p>
                                </div>
                                <div className="stat-container">
                                    <p className="stat-title">Route type</p>
                                    <p className="stat-content">{trail.route}</p>
                                </div>
                            </div>
                        </div>
                        <Review reviews={reviews} avgRating={avgRating} user={user} deleteReview={this.props.deleteReview} openModal={this.props.openModal} />
                    </div>
                    <div className="trail-right">
                        <div className="trail-map">
                            <Map trail={trail} filteredTrails={filteredTrails} park={park} />
                        </div>
                        <RelatedTrails park={park} filteredTrails={filteredTrails} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Trail