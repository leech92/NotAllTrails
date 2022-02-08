import React from "react";
import Top from "../shared/top";
import RelatedTrails from "./related_trails"

class Trail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPayload()
        this.props.fetchTrail(this.props.match.params.trailId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.trailId !== this.props.match.params.trailId) {
            this.props.fetchPayload()
            this.props.fetchTrail(this.props.match.params.trailId)
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

        const { trail, parks } = this.props
        const park = parks[trail.park_id]
        const location = [`${park.country}`, `${park.state}`, `${park.park_name}`, `${trail.trail_name}`]

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
                            Rating Placeholder
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
                        <div className="trail-reviews">
                            Reviews Placeholder
                        </div>
                    </div>
                    <div className="trail-right">
                        <div className="trail-map">
                            Map Placeholder
                        </div>
                        <RelatedTrails park={park} trail={trail} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Trail