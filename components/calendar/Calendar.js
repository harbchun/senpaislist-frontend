import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CalendarSkeleton from './CalendarSkeleton'
import { useSelector, useDispatch } from 'react-redux'
import useMediaQuery from '~/helpers/hooks/media-query'
import FilterYear from '~/components/filterBar/filterYear/FilterYear'
import FilterSeason from '~/components/filterBar/filterSeason/FilterSeason'
import FilterOrder from '~/components/filterBar/filterOrder/FilterOrder'
import FilterView from '~/components/filterBar/filterView/FilterView'

import style from '~/styles/calendar.module.sass'

function Calendar() {
    const dispatch = useDispatch()
    const year = useSelector((state) => state.anime.year)
    const [currentRef, useCurrentRef] = useState(null)
    const calendarRefs = {}
    const loaded = true

    let small = useMediaQuery('(max-width: 700px)')

    useEffect(() => {
        useCurrentRef(calendarRefs[year])
    }, [])

    if (!loaded) {
        return (
            <div className={style.calendarContainer}>
                <CalendarSkeleton />
            </div>
        )
    }

    return (
        <div className={style.calendarContainer}>
            <div className={style.calendar}>
                <FilterYear />
                <div className={style.divider} />
                <FilterSeason />
                <div className={`${style.divider} ${style.orderDivider}`} />
                <FilterOrder />
                <div className={style.divider} />
                <FilterView />
            </div>
        </div>
    )
}

Calendar.propTypes = {
    year: PropTypes.number,
    season: PropTypes.string
}

export default Calendar
