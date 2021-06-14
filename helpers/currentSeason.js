export default function currentSeason() {
    const month = new Date().getMonth()

    if (month < 3) {
        return 'Winter'
    } else if (month < 6) {
        return 'Spring'
    } else if (month < 9) {
        return 'Summer'
    } else {
        return 'Fall'
    }
}