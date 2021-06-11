const ANIME = {
  state: {
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    seasons: ['Winter', 'Spring', 'Summer', 'Fall'],
    year: 2021,
    season: 'Winter',
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
