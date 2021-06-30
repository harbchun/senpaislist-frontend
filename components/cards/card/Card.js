import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

import style from '~/styles/card.module.sass'

function Card({ title, broadcastTime, nextBroadcast, imgUrl, score, genres }) {
    const { ref, inView, entry } = useInView({
        threshold: 0
    })

    const [seen, setSeen] = useState(false)

    useEffect(() => {
        if (inView) {
            setSeen(true)
        }
    }, [inView])

    return (
        <div ref={ref} className={style.card}>
            {seen ? <img src={imgUrl} alt="thumbnail" className={style.thumbnail} /> : null}
            <div className={style.overlay}>
                <p className={style.score}>
                    <img src="/static/star.png" alt="star" className={style.star} />
                    {score}
                </p>
                <p className={style.title}>{title}</p>
                <p className={style.subtitle}>bones • manga</p>
                <div className={style.genres}>
                    {genres.map((genre) => {
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
    score: PropTypes.string,
    imgUrl: PropTypes.string,
    genres: PropTypes.array,
    expandedView: PropTypes.string.boolean,
    description: PropTypes.string
}

export default Card
