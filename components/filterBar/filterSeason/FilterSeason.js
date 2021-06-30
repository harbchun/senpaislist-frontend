/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useComponentVisible from '~/helpers/hooks/click-outside'
import currentSeason from "~/helpers/currentSeason"

import style from '~/styles/filterSeason.module.sass'

function Dropdown({ seasons, isComponentVisible }) {
    const dispatch = useDispatch()

    function handleClick(season) {
        dispatch.anime.updateSeason(season)
    }

    return (
        <div className={style.dropdown}
        style={{'display': (isComponentVisible ? '' : 'none')}}
        >
            {seasons.map((season) => {
                        return (
                            <button key={season} className={style.seasonButton} onClick={() => handleClick(season)}>
                                <p>{season}</p>
                            </button>                            
                        )
                    })}
        </div>
    )
}

function FilterSeason() {
    const dispatch = useDispatch()
    const seasons = useSelector((state) => state.anime.seasons)
    const season = useSelector((state) => state.anime.season)
    const [active, setActive] = useState(false)
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    useEffect(() => {
        if (seasons && seasons.length > 0) {
            if (!seasons.includes(season)) {
                dispatch.anime.updateSeason(currentSeason())
            }
        }
    }, [season, seasons])

    return (
        <>
            {seasons ? 
            <div className={style.filterSeason} ref={ref}>
                <div className={style.seasonButton} onClick={() => setIsComponentVisible(!isComponentVisible)} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                    <div className={style.textContainer}>
                        <p className={style.subtitle}>seasons</p>
                        <p className={`${style.season} ${active ? style.seasonActive : ''}`}>{season}</p>
                    </div>
                    <img className={style.arrowDown} src='/static/arrow-down.svg'/>
                </div>
                <Dropdown
                    isComponentVisible={isComponentVisible}
                    seasons={seasons}
                />
            </div>
            :
            null
            }
        </>
    )
}

export default FilterSeason
