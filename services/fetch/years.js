import { FETCH_YEARS } from '../queries/years'
import initApollo from '~/global'

const yearsFetch = {
    fetchYears: () => {
        return initApollo()
          .query({
            query: FETCH_YEARS
          })
          .then(res => {
            return res.data.years
          })
          .catch(err => {
            throw err
          })
      },
}

export default yearsFetch
