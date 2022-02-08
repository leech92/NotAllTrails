import React from "react";

class MiniSearchBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            search: ""
        }
        this.parkSearch = this.parkSearch.bind(this)
        this.trailSearch = this.trailSearch.bind(this)
        this.setActive = this.setActive.bind(this)
        this.setSearch = this.setSearch.bind(this)
    }

    componentDidMount() {
        this.props.fetchSearches()
    }

    parkSearch(id) {
        this.props.history.push(`/parks/${id}`)
    }

    trailSearch(id) {
        this.props.history.push(`/trails/${id}`)
    }

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
        if (!Object.keys(this.props.parks).length) return null
        if (Object.keys(this.props.parks).length !== 3) return null

        const { parks } = this.props
        const parksArray = Object.values(parks)
        const trailsArray = []

        parksArray.forEach(park => {
            park.trails.forEach(trail => {
                trailsArray.push(trail)
            })
        }) 

        return (
            <div className="mini-search-bar-container">
                <div className="mini-search-bar">
                    <input 
                        className="mini-search-bar-body" 
                        type="text" 
                        placeholder="Search by park or trail name"
                        onFocus={this.setActive}
                        onBlur={this.setActive}
                        onChange={this.setSearch}
                    />
                    <div className="mini-search-bar-image-container">
                        <img className="mini-search-bar-image" src={window.search} />
                    </div>
                </div>
                <div className={this.state.active ? "mini-search-bar-active" : "mini-search-bar-unactive"}>
                    {parksArray.map((park, idx) => {
                        if (park.park_name.toLowerCase().includes(this.state.search.toLowerCase())){
                            return (
                                <li key={idx} className="mini-search-bar-result" onClick={() => this.parkSearch(park.id)}>
                                    <div className="mini-result-image-container">
                                        <img className="mini-result-image" src={window.park} />
                                    </div>
                                    <div className="mini-result-text">
                                        <h1 className="mini-result-text-name">{park.park_name}</h1>
                                        <p className="mini-result-text-location">{park.state}, {park.country}</p>
                                    </div>
                                </li>
                            )
                        }
                    })}
                    {trailsArray.map((trail, idx) => {
                        if (trail.trail_name.toLowerCase().includes(this.state.search.toLowerCase())){
                            return (
                                <li key={idx} className="mini-search-bar-result" onClick={() => this.trailSearch(trail.id)}>
                                    <div className="mini-result-image-container">
                                        <img className="mini-result-image" src={window.trail} />
                                    </div>
                                    <div className="mini-result-text">
                                        <h1 className="mini-result-text-name">{trail.trail_name}</h1>
                                        <p className="mini-result-text-location">{parks[trail.park_id].park_name}, {parks[trail.park_id].state}, {parks[trail.park_id].country}</p>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default MiniSearchBar