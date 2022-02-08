import React from "react";
import Top from "../shared/top"
import ParkTrails from "./park_trails"

class Park extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
    }

    render() {
        if (!Object.keys(this.props.park).length) return null

        const { park } = this.props
        const trails = park.trails
        const location = [`${park.country}`, `${park.state}`, `${park.park_name}`]
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
                        Rating Placeholder
                    </div>
                    <p className="park-description-body">{park.description}</p>
                </div>
                <div className="park-map">
                    Map Placeholder
                </div>
                <div className="park-buttons">
                    Buttons Placeholder
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