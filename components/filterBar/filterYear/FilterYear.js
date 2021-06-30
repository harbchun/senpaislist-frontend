/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import serviceHooks from '~/services'
import useComponentVisible from '~/helpers/hooks/click-outside'

import style from '~/styles/filterYear.module.sass'

function Row({ years, floored }) {
    const dispatch = useDispatch()
    const [yearCells, setYearCells] = useState([])

    useEffect(() => {
        const rowList = []
        for (let i = 0; i < 10; i++) {
            if (years.includes(floored + i)) {
                rowList.push(<button onClick={() => handleClick(floored + i)} className={style.activeYear} key={floored + i}>{floored + i}</button>)
            } else {
                rowList.push(<button className={style.inactiveYear} key={floored + i}>{floored + i}</button>)
                
            }
        }

        setYearCells(rowList)
    }, [years])

    function handleClick(year) {
        dispatch.anime.updateYear(year)
    }

    return (
        <div className={style.row}>
         {yearCells}
        </div>
    )
}

function Dropdown({ years, isComponentVisible }) {
    const min = Math.floor(Math.min.apply(Math, years) / 10) * 10
    const max = Math.floor(Math.max.apply(Math, years) / 10) * 10

    const increments = ((max - min) / 1)

    const result = []

    for(var i = min; i <= max; i = i + increments) {
        result.push(i);
    }

    return (
        <div className={style.dropdown}
        style={{'display': (isComponentVisible ? '' : 'none')}}
        >
            {result.map((year) => {
                        return (
                            <Row
                                key={year}
                                years={years}
                                floored={year}
                            />
                        )
                    })}
        </div>
    )
}

function FilterYear() {
    const dispatch = useDispatch()
    const years = useSelector((state) => state.anime.years)
    const year = useSelector((state) => state.anime.year)
    const [active, setActive] = useState(false)
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
    const { data: yearData } = serviceHooks.years.fetchYears()

    useEffect(() => {
        if (yearData && yearData.years) {
            dispatch.anime.updateYears(yearData.years)
            if (!yearData.years.map(year => year.year).includes(parseInt(year))) {
                dispatch.anime.updateYear(new Date().getFullYear())
            }
        }        
    }, [yearData])

    return (
        <>
            <div className={style.filterYear} ref={ref}>
                <div className={style.yearButton} onClick={() => setIsComponentVisible(!isComponentVisible)} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                    <div className={style.textContainer}>
                        <p className={style.subtitle}>year</p>
                        <p className={`${style.year} ${active ? style.yearActive : ''}`}>{year}</p>
                    </div>
                    <img className={style.arrowDown} src='/static/arrow-down.svg'/>
                </div>
                <Dropdown
                    isComponentVisible={isComponentVisible}
                    years={years}
                />
            </div>
        </>
    )
}

export default FilterYear
