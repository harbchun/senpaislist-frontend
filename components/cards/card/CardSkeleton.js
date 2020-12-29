import React, { useState } from 'react'

import style from '~/styles/card.module.sass'

function Card() {
    const [expand, setExpand] = useState(false)
    const imgLink = 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg'

    return (
        <div className={`${style.card} ${style.cardSkeleton}`}>
            <div
                role="presentation"
                className={`${style.cardBody}`}
                onClick={() => setExpand(!expand)}>
                <div className={style.cardHeader}>
                    <p className={style.genreSkeleton}></p>
                    <div className={style.addButtonSkeleton}></div>
                </div>
                <p className={style.titleSkeleton}></p>
                <p className={style.countdownSkeleton}></p>
            </div>
        </div>
    )
}

export default Card
