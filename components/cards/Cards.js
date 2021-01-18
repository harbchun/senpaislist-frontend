import React, { useEffect } from 'react'

import Card from '~/components/cards/card/Card'
import CardSkeleton from '~/components/cards/card/CardSkeleton'
import serviceHooks from '~/services'
import PropTypes from 'prop-types'
import { initStore, withRematch } from '~/rematch'

import style from '~/styles/cards.module.sass'

function Cards({ year, season }) {
    const { data, loading } = serviceHooks.anime.fetchAnime(year, season)

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

    return (
        <div className={style.cards}>
            {data.anime.map((anime) => {
                return (
                    <Card
                        title={anime.title}
                        broadcastTime={anime.broadcast_time}
                        imgUrl={anime.image_url}
                        genres={anime.genre}
                        score={anime.score}
                        key={anime.title}
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
