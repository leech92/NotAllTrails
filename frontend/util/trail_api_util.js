export const fetchTrail = trailId => {
    return $.ajax({
        url: `api/trails/${trailId}`,
        method: "GET"
    })
}

export const fetchTrails = () => {
    return $.ajax({
        url: "api/trails",
        method: "GET"
    })
}