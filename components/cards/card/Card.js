import React, { useState } from 'react'

import style from '~/styles/card.module.sass'

function Card() {
    const [expand, setExpand] = useState(false)
    const imgLink = 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg'

    return (
        <div className={`${style.card} ${expand ? style.expanded : ''}`}>
            <div
                role="presentation"
                className={`${style.cardBody}`}
                onClick={() => setExpand(!expand)}>
                <img src={imgLink} alt="thumbnail" className={style.thumbnail} />
                <div className={style.cardHeader}>
                    <p className={style.genre}>action</p>
                    <div className={style.addButton}>
                        <div className={style.positive} />
                        <div className={style.negative} />
                    </div>
                </div>
                <p className={style.title}>Jujutsu Kaisen</p>
            </div>
            <p className={style.countdown}>EP11: 5d 3h 44m 30s</p>
        </div>
    )
}

export default Card
