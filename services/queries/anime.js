import { gql } from '@apollo/client'

export const FETCH_ANIME = gql`
    query fetchAnime($year: Int!, $season: String!) {
        animes(filter: {airing_informations: {year: {_eq: $year}, season: {_eq: $season}}} order_by: {statistics: {popularity: "asc"}}) {
            title
            image_url
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
        }
    }
    `
    