export const fetchSearch = () => {
    return $.ajax({
        url: "api/parks",
        method: "GET"
    })
}