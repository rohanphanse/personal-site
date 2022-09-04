const monthToNumber = (month) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    return months.indexOf(month)
}

export const sortByDate = (articles, options = {}) => {
    let data = articles.sort((a, b) => {
        if (a.date.year === b.date.year) {
            const month_difference =
                monthToNumber(a.date.month) -
                monthToNumber(b.date.month)
            if (month_difference === 0) {
                return b.title.localeCompare(a.title)
            } else {
                return month_difference
            }
        } else {
            return a.date.year - b.date.year
        }
    })
    const order = options.order || "decreasing"
    if (order === "decreasing") {
        data.reverse()
    }
    return data
}