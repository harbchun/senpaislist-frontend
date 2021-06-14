import currentSeason from "~/helpers/currentSeason"

const ANIME = {
  state: {
    years: [],
    seasons: ['Winter', 'Spring', 'Summer', 'Fall'],
    year: new Date().getFullYear(),
    season: currentSeason(),
    animeList: [],
    filters: [],
    sort: 'Popularity:Descending',
    text: '',
    expandedView: false
  },
  reducers: {
    // handle state changes with pure functions
    updateYear(state, payload) {
        return {
          ...state,
          year: payload
        }
    },
    updateYears(state, payload) {
      const yearList = payload.years.map(year => year.year)

      return {
        ...state,
        years: yearList
      }
    },
    updateSeason(state, payload) {
        return {
          ...state,
          season: payload
        }
    },
    updateAnimeList(state, payload) {
      return {
        ...state,
        animeList: payload
      }
    },
    updateSort(state, payload) {
      return {
        ...state,
        sort: payload
      }
    },
    updateText(state, payload) {
      return {
        ...state,
        text: payload
      }
    },
    updateExpandedView(state, payload) {
      return {
        ...state,
        expandedView: payload
      }
    },
  },
  effects: dispatch => ({
  })
}

export default ANIME
