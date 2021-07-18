export default function sortQueryBuilder(sortString) {
    let sort = sortString.split(':')[0]
    let direction = sortString.split(':')[1]

    if (direction === 'ASC') {
        direction = 'asc'
    } else {
        direction = 'desc'
    }

    if (sort === 'Popularity') {
        return {statistics: {popularity: direction}}
    } else if (sort === 'Title') {
        return {title: direction}
    } else if (sort === 'Score') {
        return {statistics: {score: direction}}
    }

    return null
}