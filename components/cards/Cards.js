import React, { useEffect } from 'react'

import Card from '~/components/cards/card/Card'
import ExpandedCard from '~/components/cards/expanded-card/ExpandedCard'
import CardSkeleton from '~/components/cards/card/CardSkeleton'
import serviceHooks from '~/services'
import { useSelector, useDispatch } from 'react-redux'
import sortQueryBuilder from '~/helpers/sortQueryBuilder'
import style from '~/styles/cards.module.sass'

function Cards() {
    const dispatch = useDispatch()
    const sort = useSelector((state) => state.anime.sort)
    const year = useSelector((state) => state.anime.year)
    const view = useSelector((state) => state.anime.view)
    const season = useSelector((state) => state.anime.season)
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
            refetch({
                variables: {
                    year: year,
                    season: season.toLowerCase(),
                    orderBy: sortQueryBuilder(sort)
                }
            })
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
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
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
        return <div className={style.simpleCardsGrid}><div className={style.cards}>{skeletonCards}</div></div>
    }

    if (!loading && !data) {
        return <div className={style.cards}>No anime found</div>
    }

    const searchFilter = data.animes.filter((anime) =>
        anime.title.toLowerCase().includes(textSearch.toLowerCase())
    )

    return (
        <>
            {view === 'Detailed' ? (
                <div className={style.detailedCardsGrid}>
                    <div className={style.cards}>
                        {searchFilter.map((anime) => {
                            return (
                                <ExpandedCard
                                    title={anime.title}
                                    broadcastTime={anime.title}
                                    nextBroadcast={anime.title}
                                    imgID={anime.image_id}
                                    genres={anime.anime_genres}
                                    season={anime.airing_information.season}
                                    year={anime.airing_information.year}
                                    score={anime.statistic.score}
                                    description={anime.summary}
                                    source={anime.source}
                                    studios={anime.anime_studios}
                                    key={anime.title}
                                />
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className={style.simpleCardsGrid}>
                    <div className={style.cards}>
                        {searchFilter.map((anime) => {
                            return (
                                <Card
                                    title={anime.title}
                                    broadcastTime={anime.title}
                                    nextBroadcast={anime.title}
                                    imgID={anime.image_id}
                                    genres={anime.anime_genres}
                                    season={anime.airing_information.season}
                                    year={anime.airing_information.year}
                                    score={anime.statistic.score}
                                    source={anime.source}
                                    studios={anime.anime_studios}
                                    key={anime.title}
                                />
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default Cards
