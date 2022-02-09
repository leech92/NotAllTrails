import React from "react";
import { withRouter } from "react-router";

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.setMap = this.setMap.bind(this)
    }

    setMap() {
        let center;

        if (this.props.trail){
            center = { lat: this.props.trail.latitude,
                       lng: this.props.trail.longitude}
        } else{
            center = { lat: this.props.park.latitude,
                       lng: this.props.park.longitude}
        }

        const mapOptions = {
            center: center,
            zoom: 10
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)

        let marker;
        let pos;
        
        if (this.props.trail){
            this.props.filteredTrails.push(this.props.trail)
            
            this.props.filteredTrails.forEach(trail => {
                pos = new google.maps.LatLng(trail.latitude, trail.longitude)
                marker = new google.maps.Marker({
                    position: pos,
                    map: this.map
                })
            })

            pos = new google.maps.LatLng(this.props.park.latitude, this.props.park.longitude)
            marker = new google.maps.Marker({
                position: pos,
                map: this.map
            })
        } else{
            this.props.park.trails.forEach(trail => {
                pos = new google.maps.LatLng(trail.latitude, trail.longitude);
                marker = new google.maps.Marker({
                    position: pos,
                    map: this.map
                });
            })

            pos = new google.maps.LatLng(this.props.park.latitude, this.props.park.longitude)
            marker = new google.maps.Marker({
                position: pos,
                map: this.map
            })
        }
    }

    componentDidMount() {
        this.setMap()
    }

    componentDidUpdate() {
        this.setMap()
    }

    render() {
        return(
            <div className="map" ref={ map => this.mapNode = map } />
        )
    }
}

export default withRouter(Map);