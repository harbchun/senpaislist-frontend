import { useQuery } from '@apollo/client'
import { FETCH_YEARS } from './queries/years'
import initApollo from '~/global'

const yearsHooks = {
  fetchYears: () => useQuery(FETCH_YEARS, { client: initApollo()})
}

export default yearsHooks
