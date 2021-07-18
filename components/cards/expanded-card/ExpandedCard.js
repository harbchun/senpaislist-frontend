import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Drawer from '~/components/cards/card/drawer/Drawer'
import { useInView } from 'react-intersection-observer'

import style from '~/styles/expandedCard.module.sass'

function ExpandedCard({ title, imgID, genres, score, description, season, year }) {
    const imageUrl = `https://senpaislist-images.s3.ca-central-1.amazonaws.com/${year}/${season}/${imgID}.jpg`

    const { ref, inView } = useInView({
        threshold: 0
    })

    const [seen, setSeen] = useState(false)

    useEffect(() => {
        if (inView) {
            setSeen(true)
        }
    }, [inView])

    return (
        <div className={style.expandedCardContainer}>
            <div ref={ref} className={style.expandedCard}>
                {seen ? <img src={imageUrl} alt="thumbnail" className={style.thumbnail} /> : null}
                <p className={style.score}>
                    <img src="/static/star.png" alt="star" className={style.star} />
                    {score}
                </p>
                <Drawer title={title} genres={genres} description={description} />
            </div>
        </div>
    )
}

ExpandedCard.propTypes = {
    title: PropTypes.string,
    broadcastTime: PropTypes.string,
    nextBroadcast: PropTypes.string,
    score: PropTypes.string,
    imgUrl: PropTypes.string,
    genres: PropTypes.array,
    description: PropTypes.string
}

export default ExpandedCard
