export const login = user => {
    debugger
    $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user }
    })
}

export const logout = () => {
    debugger
    $.ajax({
        url: "/api/session",
        method: "DELETE",
    })
}

export const signup = user => {
    debugger
    $.ajax({
        url: "/api/users",
        method: "POST",
        data: { user }
    })
}