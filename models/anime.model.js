import serviceHooks from '~/services'

const ANIME = {
  state: {
    year: 2021,
    season: 'Winter',
    animeList: [],
    filters: [],
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
    updateSeason(state, payload) {
        return {
          ...state,
          season: payload
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
