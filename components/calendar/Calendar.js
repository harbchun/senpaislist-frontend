import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { initStore, withRematch } from '~/rematch'

import style from '~/styles/calendar.module.sass'

function Calendar({ year, season }) {
    const [expand, useExpand] = useState(false)
    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
    const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
    const [currentYear, useCurrentYear] = useState(null)
    const [currentSeason, useCurrentSeason] = useState(null)
    const [currentRef, useCurrentRef] = useState(null)
    const calendarRefs = {}

    useEffect(() => {
        useCurrentYear(year)
        useCurrentSeason(season)
        useCurrentRef(calendarRefs[year])
    }, [])

    useEffect(() => {
        if (!expand && currentYear) scrollTo()
    }, [expand, currentYear])

    const updateSelected = (year, season) => {
        useCurrentYear(year)
        useCurrentSeason(season)
        useCurrentRef(calendarRefs[year])
    }

    const scrollTo = () => {
        setTimeout(function () {
            currentRef.scrollIntoView(false)
        }, 200)
    }

    const calendarRows = years.map((year) => {
        return (
            <div className={style.row} key={year} ref={(e) => (calendarRefs[year] = e)}>
                {seasons.map((season) => {
                    return (
                        <div
                            role="presentation"
                            key={`${year}-${season}`}
                            className={`${style.cell} ${
                                year === currentYear && currentSeason === season ? style.active : ''
                            }`}
                            onClick={() => updateSelected(year, season)}>
                            <p className={style.season}>{season}</p>
                            <p className={style.year}>{year}</p>
                        </div>
                    )
                })}
            </div>
        )
    })

    return (
        <div className={style.calendarContainer}>
            <div className={style.expand}>
                <button onClick={() => useExpand(!expand)} className={style.expandButton}>
                    <div className={style.negative}></div>
                    <div className={`${style.positive} ${expand ? style.active : ''}`}></div>
                </button>
            </div>
            <div className={`${style.calendar} ${expand ? style.expandCalendar : ''}`}>
                {calendarRows}
            </div>
        </div>
    )
}

Calendar.propTypes = {
    year: PropTypes.number.isRequired,
    season: PropTypes.string.isRequired
}

const mapState = (state) => ({
    year: state.anime.year,
    season: state.anime.season
})

const mapDispatch = (dispatch) => {
    return {}
}

export default withRematch(initStore, mapState, mapDispatch)(Calendar)
