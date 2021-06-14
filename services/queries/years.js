import { gql } from '@apollo/client'

export const FETCH_YEARS = gql`
    query fetchYears {
        years {
            year
        }
    }
    `
    