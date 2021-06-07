import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CalendarSkeleton from './CalendarSkeleton'
import { initStore, withRematch } from '~/rematch'
import { useSelector, useDispatch } from 'react-redux'

import style from '~/styles/calendar.module.sass'

function Calendar({
    isComponentVisible,
    setIsComponentVisible
}) {
    const dispatch = useDispatch()
    const year = useSelector((state) => state.anime.year)
    const years = useSelector((state) => state.anime.years)
    const season = useSelector((state) => state.anime.season)
    const seasons = useSelector((state) => state.anime.seasons)
    const [currentRef, useCurrentRef] = useState(null)
    const calendarRefs = {}
    const loaded = true

    useEffect(() => {
        useCurrentRef(calendarRefs[year])
    }, [])

    useEffect(() => {
        if (!isComponentVisible && year) scrollTo()
    }, [isComponentVisible, year, currentRef])

    const updateSelected = (year, season) => {
        dispatch.anime.updateSeason(season)
        dispatch.anime.updateYear(year)
        useCurrentRef(calendarRefs[year])
    }

    const scrollTo = () => {
        if (currentRef) {
            setTimeout(function () {
                currentRef.scrollIntoView(false)
            }, 200)
        }
    }

    const calendarRows = years.map((yearValue) => {
        return (
            <div className={style.row} key={yearValue} ref={(e) => (calendarRefs[yearValue] = e)}>
                {seasons.map((seasonValue) => {
                    return (
                        <div
                            role="presentation"
                            key={`${yearValue}-${seasonValue}`}
                            className={`${style.cell} ${
                                yearValue === year && seasonValue === season ? style.active : ''
                            }`}
                            onClick={() => updateSelected(yearValue, seasonValue)}>
                            <p className={style.season}>{seasonValue}</p>
                            <p className={style.year}>{yearValue}</p>
                        </div>
                    )
                })}
            </div>
        )
    })

    if (!loaded) {
        return (
            <div className={style.calendarContainer}>
                <CalendarSkeleton />
            </div>
        )
    }

    return (
        <div className={style.calendarContainer}>
            <div className={style.expand}>
                <button
                    onClick={() => setIsComponentVisible(!isComponentVisible)}
                    className={style.expandButton}>
                    <div className={style.negative}></div>
                    <div
                        className={`${style.positive} ${
                            isComponentVisible ? style.active : ''
                        }`}></div>
                </button>
            </div>
            <div className={`${style.calendar} ${isComponentVisible ? style.expandCalendar : ''}`}>
                {calendarRows}
            </div>
        </div>
    )
}

Calendar.propTypes = {
    year: PropTypes.number.isRequired,
    season: PropTypes.string.isRequired,
    isComponentVisible: PropTypes.func,
    setIsComponentVisible: PropTypes.func
}

export default withRematch(initStore)(Calendar)
