# NotAllTrails

[Live Site Link](https://not-all-trails.herokuapp.com/#/)

<img src="splash.png" width="800" height="400">

# Overview
NotAllTrails is a clone of AllTrails where people can use a search an links to find parks and trails. Each park and trail page will have information on the park or hike along with links to the related trails or nearby trails. Both pages will also have a map with markers that show nearby parks and trails. The trail pages will also have reviews that signed in users can create, update, and delete.

# Technologies
NotAllTrails is built with a backend that uses Ruby on Rails and a frontend that uses React and Redux. The database was built using PostgesSql and the trail images were uploaded using AWS S3 storage. Styling was done using SCSS. The maps and markers were generated using the Google Maps API.

# Features
## Reviews CRUD
Signed in users will have the ability to create reviews, update their reviews, and delete their reviews on the trail pages. When not signed in, only the ability to read reviews will be available. The create and edit functionality is done through the use of a modal that allows for a more fluid user experience.

<img src="modal.png" width="600" height="300">

## Google Maps API
The Google Maps API was used to generate a map that shows the park and nearby trails. The map allos users to see and easily access information from nearby parks and trails by clicking on the markers.

<img src="gmap.png" width="400" height="400">

## Search Bar
A search bar is available on every page to allow users to easily naviagte from one page to another. The search bar uses a helper function and a filter to manipulate the className to display a dropdown that the user wants to see.

```js
setActive() {
    if (this.state.active) {
        setTimeout(() => {
            this.setState({active: false})
        }, 200)
    }else {
        this.setState({active: true})
    }
}

setSearch(event) {
    this.setState({search: event.target.value})
}

render() {
    
    (other code)

    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <div className="search-bar-image-container">
                    <img className="search-bar-image" src={window.search} />
                </div>
                <input 
                    className="search-bar-body" 
                    type="text" 
                    placeholder="Search by park or trail name"
                    onFocus={this.setActive}
                    onBlur={this.setActive}
                    onChange={this.setSearch}
                />
            </div>
            <div className={this.state.active ? "search-bar-active" : "search-bar-unactive"}>
                {parksArray.map((park, idx) => {
                    if (park.park_name.toLowerCase().includes(this.state.search.toLowerCase())){
                        return (
                            <li key={idx} className="search-bar-result" onClick={() => this.parkSearch(park.id)}>
                                <div className="result-image-container">
                                    <img className="result-image" src={window.park} />
                                </div>
                                <div className="result-text">
                                    <h1 className="result-text-name">{park.park_name}</h1>
                                    <p className="result-text-location">{park.state}, {park.country}</p>
                                </div>
                            </li>
                        )
                    }
                })}
                {trailsArray.map((trail, idx) => {
                    if (trail.trail_name.toLowerCase().includes(this.state.search.toLowerCase())){
                        return (
                            <li key={idx} className="search-bar-result" onClick={() => this.trailSearch(trail.id)}>
                                <div className="result-image-container">
                                    <img className="result-image" src={window.trail} />
                                </div>
                                <div className="result-text">
                                    <h1 className="result-text-name">{trail.trail_name}</h1>
                                    <p className="result-text-location">{parks[trail.park_id].park_name}, {parks[trail.park_id].state}, {parks[trail.park_id].country}</p>
                                </div>
                            </li>
                        )
                    }
                })}
            </div>
        </div>
    )
}
```