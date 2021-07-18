import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useResize from '~/helpers/hooks/element-size'

import style from '~/styles/drawer.module.sass'

function Drawer({ title, genres, description }) {
    const { ref, width } = useResize()
    const [activeDescription, setActiveDescription] = useState(false)
    const [cutDescription, setCutDescription] = useState(description)
    const [cutTitle, setCutTitle] = useState(false)
    const [cutGenres, setCutGenres] = useState(genres)

    useEffect(() => {
        if (width < 255) {
            if (description) {
                setCutDescription(
                    description.slice(0, 110) + `${description.length < 110 ? '' : '...'}`
                )
            }
            setCutGenres(genres.slice(0, 2))
            if (title.length > 44) {
                setCutTitle(true)
            }
        } else {
            if (description) {
                setCutDescription(description.slice(0, 400) + `${description.length < 400 ? '' : '...'}`)
            }
            setCutGenres(genres.slice(0, 4))
            if (title.length > 44) {
                setCutTitle(false)
            }
        }
    }, [width])

    return (
        <div className={`${style.drawer} ${activeDescription ? style.hidden : ''}`}>
            <div>
                <p className={`${style.title} ${cutTitle ? style.titleS : ''}`}>{title}</p>
                <p className={style.subtitle}>bones • manga</p>
            </div>
            <p
                ref={ref}
                className={`${style.description} ${
                    activeDescription ? style.activeDescription : ''
                }`}
                onMouseEnter={() => setActiveDescription(true)}
                onMouseLeave={() => setActiveDescription(false)}>
                {activeDescription ? description : cutDescription}
            </p>
            <div className={`${style.genres} ${activeDescription ? style.hidden : ''}`}>
                {cutGenres.map((genre) => {
                    return (
                        <p className={style.genre} key={genre.genre}>
                            {genre.genre}
                        </p>
                    )
                })}
            </div>
            <div className={`${style.countdownContainer} ${activeDescription ? style.hidden : ''}`}>
                <p className={style.episodes}>ep 2 of 24 airing in</p>
                <p className={style.countdown}>10 Days 8 Hours</p>
            </div>
        </div>
    )
}

Drawer.propTypes = {
    description: PropTypes.string,
    genres: PropTypes.array,
    title: PropTypes.string
}

export default Drawer
