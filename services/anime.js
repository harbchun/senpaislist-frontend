import { useQuery } from '@apollo/client'
import { FETCH_ANIME } from './queries/anime'
import initApollo from '~/global'

const animeHooks = {
  fetchAnime: (year, season) =>
    useQuery(FETCH_ANIME, { client: initApollo(), 
      variables: {
        year,
        season
      }
    })
}

export default animeHooks
