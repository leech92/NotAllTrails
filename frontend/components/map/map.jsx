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

        let trailMarker = [];
        let trailPos = [];
        let parkMarker;
        let parkPos;
        
        if (this.props.trail){
            this.props.filteredTrails.push(this.props.trail)
            
            this.props.filteredTrails.forEach((trail, index) => {
                trailPos[index] = new google.maps.LatLng(trail.latitude, trail.longitude)
                trailMarker[index] = new google.maps.Marker({
                    position: trailPos[index],
                    map: this.map
                })

                const contentString = '<div>' + `<h1>Name: ${trail.trail_name}</h1>` + `<h2>Length: ${trail.length} mi</h2>` + `<h2>Duration: ${trail.duration}</h2>`
                const infoWindow = new window.google.maps.InfoWindow({ content: contentString })

                trailMarker[index].addListener('click', () => {
                    infoWindow.open({
                        anchor: trailMarker[index],
                        map: this.map,
                        shouldFocus: true
                    })
                })
            })

            parkPos = new google.maps.LatLng(this.props.park.latitude, this.props.park.longitude)
            parkMarker = new google.maps.Marker({
                position: parkPos,
                map: this.map
            })

            const contentString = '<div>' + `<h1>Name: ${this.props.park.park_name}</h1>` + `<h2>Acreage: ${Number(this.props.park.acreage).toLocaleString()} acres</h2>` + `<h2>Contact: ${this.props.park.contact}</h2>`
            const infoWindow = new window.google.maps.InfoWindow({ content: contentString })

            parkMarker.addListener('click', () => {
                infoWindow.open({
                    anchor: parkMarker,
                    map: this.map,
                    shouldFocus: true
                })
            })
        } else{
            this.props.park.trails.forEach((trail, index) => {
                trailPos[index] = new google.maps.LatLng(trail.latitude, trail.longitude);
                trailMarker[index] = new google.maps.Marker({
                    position: trailPos[index],
                    map: this.map
                })
                
                const contentString = '<div>' + `<h1>Name: ${trail.trail_name}</h1>` + `<h2>Length: ${trail.length} mi</h2>` + `<h2>Duration: ${trail.duration}</h2>`
                const infoWindow = new window.google.maps.InfoWindow({ content: contentString })

                trailMarker[index].addListener('click', () => {
                    infoWindow.open({
                        anchor: trailMarker[index],
                        map: this.map,
                        shouldFocus: true
                    })
                })
            })

            parkPos = new google.maps.LatLng(this.props.park.latitude, this.props.park.longitude)
            parkMarker = new google.maps.Marker({
                position: parkPos,
                map: this.map
            })

            const contentString = '<div>' + `<h1>Name: ${this.props.park.park_name}</h1>` + `<h2>Acreage: ${Number(this.props.park.acreage).toLocaleString()} acres</h2>` + `<h2>Contact: ${this.props.park.contact}</h2>`
            const infoWindow = new window.google.maps.InfoWindow({ content: contentString })

            parkMarker.addListener('click', () => {
                infoWindow.open({
                    anchor: parkMarker,
                    map: this.map,
                    shouldFocus: true
                })
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