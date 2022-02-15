import React from "react";
import Top from "../shared/top"
import ParkTrails from "./park_trails"
import Map from "../map/map";
import Stars from "../shared/stars";

class Park extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.parkId !== this.props.match.params.parkId) {
            this.props.fetchPark(this.props.match.params.parkId)
            window.scrollTo(0, 0)
        }
    }

    componentWillUnmount() {
        this.props.clearPark()
    }

    render() {
        if (!Object.keys(this.props.park).length) return null
        if (Object.keys(this.props.park).length === 3) return null

        const { park } = this.props
        const trails = park.trails
        let totalRating = 0
        let count = 0
        trails.forEach(trail => {
            trail.reviews.forEach(review => {
                totalRating += review.rating
                count++
            })    
        })
        const avgRating = totalRating / count
        const location = [`${park.country}`, `${park.state}`, `${park.park_name}`]

        const options = {
            size: 20,
            isHalf: true,
            edit: false
        }

        return(
            <div className="park">
                <Top location={location} parkId={park.id}/>
                <div className="park-pictures">
                    {trails.map((trail, idx) => (
                        <div key={idx} >
                            <img className="park-picture" src={trail.photoURL} />
                        </div>
                    ))}
                </div>
                <div className="park-description">
                    <h1 className="park-description-title">Best Trails in {park.park_name}</h1>
                    <div className="park-rating">
                        <Stars className="park-stars" options={options} rating={avgRating} />
                        <p className="park-rating-amount">{count} Reviews</p>
                    </div>
                    <p className="park-description-body">{park.description}</p>
                </div>
                <div className="park-map">
                    <Map park={park} />
                </div>
                <div className="park-buttons">
                    <a className="park-buttons-container" target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${park.latitude},${park.longitude}`}>
                        <div className="park-buttons-bubble">
                            <img className="park-buttons-image" src={window.map} />
                        </div>
                        <p className="park-buttons-text">Directions</p>
                    </a>
                    <a className="park-buttons-container" target="_blank" href="https://www.facebook.com/">
                        <div className="park-buttons-bubble">
                            <img className="park-buttons-image" src={window.share} />
                        </div>
                        <p className="park-buttons-text">Share</p>
                    </a>
                </div>
                <div className="park-info">
                    <h1 className="park-info-title">Park Information</h1>
                    <div className="park-info-content">
                        <div className="park-info-body">
                            <p className="info-title">Acreage:</p>
                            <p className="info-content">{Number(park.acreage).toLocaleString()} acres</p>
                        </div>
                        <div className="park-info-body">
                            <p className="info-title">Contact:</p>
                            <p className="info-content">{park.contact}</p>
                        </div>
                    </div>
                </div>
                <ParkTrails trails={trails} park={park} />
            </div>
        )
    }
}

export default Park