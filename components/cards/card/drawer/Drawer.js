import React from 'react'
import PropTypes from 'prop-types'

import style from '~/styles/card.module.sass'

function Drawer({ genres }) {
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
            <p className={style.description}>
                The second season of Yakusoku no Neverland. Fifteen children escape Grace Field
                House, a false paradise, hoping for a chance at freedom. Instead, they encounter
                plants and animals they have never before seen, and are chased by demons. The
                outside world is so
            </p>
        </div>
    )
}

Drawer.propTypes = {
    genres: PropTypes.array
}

export default Drawer
