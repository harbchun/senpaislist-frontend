import sortQueryBuilder from '~/helpers/sortQueryBuilder'
import validateTrackerUrl from '~/helpers/validateTrackerUrl'
import currentSeason from "~/helpers/currentSeason"
import serviceFetch from '~/services/fetch'

const ANIME = {
  state: {
    years: [],
    seasons: ['Winter', 'Spring', 'Summer', 'Fall'],
    year: new Date().getFullYear(),
    season: currentSeason(),
    animeList: [],
    filters: [],
    orders: ['Popularity:ASC', 'Score:DESC', 'Title:ASC'],
    sort: 'Popularity:ASC',
    text: '',
    views: ['Detailed', 'Simple'],
    view: 'Simple'
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
      const yearList = payload.map(year => year.year)
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
    updateView(state, payload) {
      return {
        ...state,
        view: payload
      }
    },
  },
  effects: dispatch => ({
    async fetchAnimes({year, season, orderBy}) {
      const animes = await serviceFetch.anime.fetchAnimes({year, season, orderBy})
      dispatch.anime.updateAnimeList(animes)
    },
    async fetchYears() {
      const years = await serviceFetch.years.fetchYears()
      dispatch.anime.updateYears(years)
    },
    async trackerSetup(query, state) {
      let year = state.anime.year
      let season = state.anime.season
      const years = state.anime.years
      const splitQuery = validateTrackerUrl(query, years, state.anime.seasons)
      if (splitQuery) {
        year = splitQuery[0]
        season = splitQuery[1]
      }

      year = parseInt(year)
      season = season.toLowerCase()

      dispatch.anime.updateYear(year)
      dispatch.anime.updateSeason(season)
      await dispatch.anime.fetchAnimes({year, season, orderBy: sortQueryBuilder(state.anime.sort)})
    },
  })
}

export default ANIME
