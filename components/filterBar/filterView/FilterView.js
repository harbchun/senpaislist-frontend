/* eslint-disable */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useComponentVisible from '~/helpers/hooks/click-outside'

import style from '~/styles/filterView.module.sass'

function Dropdown({ views, isComponentVisible }) {
    const dispatch = useDispatch()

    function handleClick(view) {
        dispatch.anime.updateView(view)
    }

    return (
        <div className={style.dropdown}
        style={{'display': (isComponentVisible ? '' : 'none')}}
        >
            {views.map((view) => {
                        return (
                            <button key={view} className={style.viewButton} onClick={() => handleClick(view)}>
                                <p>{view}</p>
                            </button>                            
                        )
                    })}
        </div>
    )
}

function FilterView() {
    const views = useSelector((state) => state.anime.views)
    const view = useSelector((state) => state.anime.view)
    const [active, setActive] = useState(false)
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    return (
        <div className={style.filterView} ref={ref}>
            <div className={style.viewButton} onClick={() => setIsComponentVisible(!isComponentVisible)} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <div className={style.textContainer}>
                    <p className={style.subtitle}>views</p>
                    <p className={`${style.view} ${active ? style.viewActive : ''}`}>{view}</p>
                </div>
                <img className={style.arrowDown} src='/static/arrow-down.svg'/>
            </div>
            {views ? 
            <Dropdown
                isComponentVisible={isComponentVisible}
                views={views}
            />
            :
            null
            }
        </div>
    )
}

export default FilterView
