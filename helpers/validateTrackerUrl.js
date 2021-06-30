export default function validateTrackerUrl(query, years, seasons) {
    let response = null

    if (query && query.tracker) {
        const splitQuery = query.tracker.split('-')
        if (splitQuery.length === 2) {
            if (years.includes(parseInt(splitQuery[0])) && seasons.includes(splitQuery[1])) {
                splitQuery[0] = parseInt(splitQuery[0])
                splitQuery[1] = splitQuery[1]

                response = splitQuery
            }
        }
    }

    return response
}