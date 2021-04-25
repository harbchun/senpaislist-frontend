import React from 'react'
import PropTypes from 'prop-types'

import style from '~/styles/card.module.sass'

function Drawer({ genres, description }) {
    return (
        <div className={style.drawer}>
            <div className={style.genreContainer}>
                {genres.map((genre) => {
                    return (
                        <p className={style.genre} key={genre}>
                            {genre}
                        </p>
                    )
                })}
            </div>
            <div className={style.airingInfo}>
                <p className={style.status}>Ongoing</p>
                <p className={style.number}>24 eps</p>
            </div>
            <p className={style.studio}>Mappa</p>
            <p className={style.description}>{description}</p>
        </div>
    )
}

Drawer.propTypes = {
    description: PropTypes.string,
    genres: PropTypes.array
}

export default Drawer
