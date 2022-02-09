import React from "react";
import { withRouter } from "react-router";

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.setMap = this.setMap.bind(this)
        this.createTrailMarkers = this.createTrailMarkers.bind(this)
        this.createParkMarkers = this.createParkMarkers.bind(this)
    }

    createTrailMarkers(trail) {
        let marker;
        let pos;

        pos = new google.maps.LatLng(trail.latitude, trail.longitude)
        marker = new google.maps.Marker({
            position: pos,
            map: this.map
        })

        const contentString = '<div>' + `<h1>Name: ${trail.trail_name}</h1>` + `<h2>Length: ${trail.length} mi</h2>` + `<h2>Duration: ${trail.duration}</h2>`
        const infoWindow = new window.google.maps.InfoWindow({ content: contentString })

        marker.addListener('click', () => {
            infoWindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: true
            })
        })
    }

    createParkMarkers(park) {
        let marker;
        let pos;

        pos = new google.maps.LatLng(this.props.park.latitude, this.props.park.longitude)
        marker = new google.maps.Marker({
            position: pos,
            map: this.map
        })

        const contentString = '<div>' + `<h1>Name: ${park.park_name}</h1>` + `<h2>Acreage: ${Number(park.acreage).toLocaleString()} acres</h2>` + `<h2>Contact: ${park.contact}</h2>`
        const infoWindow = new window.google.maps.InfoWindow({ content: contentString })

        marker.addListener('click', () => {
            infoWindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: true
            })
        })
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
        
        if (this.props.trail){
            this.props.filteredTrails.push(this.props.trail)
            
            this.props.filteredTrails.forEach(trail => {
                this.createTrailMarkers(trail)
            })

            this.createParkMarkers(this.props.park)
        } else{
            this.props.park.trails.forEach(trail => {
                this.createTrailMarkers(trail)
            })

            this.createParkMarkers(this.props.park)
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