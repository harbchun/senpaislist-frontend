import { FETCH_ANIME } from '../queries/anime'
import initApollo from '~/global'

const animesFetch ={
    fetchAnimes: ({year, season, orderBy}) => {
        return initApollo()
          .query({
            query: FETCH_ANIME,
            variables: {
                year,
                season,
                orderBy
            },
            fetchPolicy: 'no-cache'
          })
          .then(res => {
            res.data
            return res.data.animes
          })
          .catch(err => {
            throw err
          })
      },
}

export default animesFetch
