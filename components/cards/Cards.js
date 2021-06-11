import React, { useEffect } from 'react'

import Card from '~/components/cards/card/Card'
import CardSkeleton from '~/components/cards/card/CardSkeleton'
import serviceHooks from '~/services'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { initStore, withRematch } from '~/rematch'
import sortQueryBuilder from '~/helpers/sortQueryBuilder'
import style from '~/styles/cards.module.sass'

function Cards({ year, season }) {
    const dispatch = useDispatch()
    const sort = useSelector((state) => state.anime.sort)
    const textSearch = useSelector((state) => state.anime.text)
    const { data, loading, refetch } = serviceHooks.anime.fetchAnime(
        year,
        season.toLowerCase(),
        sortQueryBuilder(sort)
    )

    useEffect(() => {
        if (data && data.animes) {
            dispatch.anime.updateAnimeList(data.animes)
        }
    }, [data])

    useEffect(() => {
        if (sort) {
            refetch({variables: {year: year,
                season: season.toLowerCase(),
                orderBy: sortQueryBuilder(sort)}})
        }
    }, [sort])

    const skeletonCards = (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    )

    if (loading) {
        return <div className={style.cards}>{skeletonCards}</div>
    }

    if (!loading && !data) {
        return <div className={style.cards}>No anime found</div>
    }

    const searchFilter = data.animes.filter(anime => anime.title.toLowerCase().includes(textSearch.toLowerCase()))

    return (
        <div className={style.cards}>
            {searchFilter.map((anime) => {
                return (
                    <Card
                        title={anime.title}
                        broadcastTime={anime.title}
                        nextBroadcast={anime.title}
                        imgUrl={anime.image_url}
                        genres={anime.anime_genres}
                        score={anime.statistic.score}
                        description={anime.summary}
                        key={anime.id}
                    />
                )
            })}
        </div>
    )
}

Cards.propTypes = {
    year: PropTypes.number,
    season: PropTypes.string,
    fetchAnime: PropTypes.func
}

const mapState = (state) => ({
    year: state.anime.year,
    season: state.anime.season
})

const mapDispatch = (dispatch) => ({})

export default withRematch(initStore, mapState, mapDispatch)(Cards)
