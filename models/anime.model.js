const ANIME = {
  state: {
    year: 2020,
    season: 'Winter'
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
    }
  },
  effects: dispatch => ({
    async fetchInsights({ title }) {
      console.log('hihihi')
    }
  })
}

export default ANIME
