import { useQuery } from '@apollo/client'
import { FETCH_GENRES } from './queries/genres'
import initApollo from '~/global'

const genresHooks = {
  fetchGenres: () => useQuery(FETCH_GENRES, { client: initApollo()})
}

export default genresHooks
