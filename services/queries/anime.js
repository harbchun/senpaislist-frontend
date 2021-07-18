import { gql } from '@apollo/client'

export const FETCH_ANIME = gql`
    query fetchAnime($year: Int!, $season: String!, $orderBy: AnimeSortInput) {
        animes(filter: {airing_informations: {year: {_eq: $year}, season: {_eq: $season}}} order_by: $orderBy) {
            title
            image_id
            summary
            anime_genres {
                genre
            }
            statistic {
                score
            }
            airing_information {
                season
                year
            }
            anime_studios {
                studio
            }
        }
    }
    `
    