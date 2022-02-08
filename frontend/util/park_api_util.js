export const fetchPark = parkId => {
    return $.ajax({
        url: `api/parks/${parkId}`,
        method: "GET"
    })
}

export const fetchParks = () => {
    return $.ajax({
        url: "api/parks",
        method: "GET"
    })
}