export const fetchTrail = trailId => {
    return $.ajax({
        url: `api/trails/${trailId}`,
        method: "GET"
    })
}