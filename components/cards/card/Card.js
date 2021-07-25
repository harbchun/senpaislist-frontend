import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

import style from '~/styles/card.module.sass'

function Card({ title, imgID, score, genres, season, year, source, studios }) {
    const imageUrl = `https://senpaislist-images.s3.ca-central-1.amazonaws.com/${year}/${season}/${imgID}.jpg`
    const { ref, inView } = useInView({
        threshold: 0
    })

    const [cutGenres, setCutGenres] = useState(genres)
    const [seen, setSeen] = useState(false)

    useEffect(() => {
        let i = 0
        let length = 0

        while (length < 25 && i < genres.length - 1 && i < 3) {
            length += genres[i].genre.length
            i++
        }

        setCutGenres(genres.slice(0, i))
    }, [])

    useEffect(() => {
        if (inView) {
            setSeen(true)
        }
    }, [inView])

    return (
        <div ref={ref} className={style.card}>
            {seen ? <img src={imageUrl} alt="thumbnail" className={style.thumbnail} /> : null}
            <div className={style.overlay}>
                <p className={style.score}>
                    <img src="/static/star.png" alt="star" className={style.star} />
                    {score}
                </p>
                <p className={style.title}>{title}</p>
                <p className={style.subtitle}>
                    {studios.map((studio) => {
                        return studio.studio + ' '
                    })}{' '}
                    • {source}
                </p>
                <div className={style.genres}>
                    {cutGenres.map((genre) => {
                        return (
                            <p className={style.genre} key={genre.genre}>
                                {genre.genre}
                            </p>
                        )
                    })}
                </div>
                <p className={style.episodes}>ep 2 of 24 airing in</p>
                <p className={style.countdown}>10 Days 8 Hours 56 Minutes</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    broadcastTime: PropTypes.string,
    nextBroadcast: PropTypes.string,
    score: PropTypes.number,
    imgID: PropTypes.string,
    season: PropTypes.string,
    year: PropTypes.number,
    genres: PropTypes.array,
    description: PropTypes.string,
    source: PropTypes.string,
    studios: PropTypes.array
}

export default Card
