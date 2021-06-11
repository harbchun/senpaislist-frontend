/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Checkbox from '~/components/public/checkbox/Checkbox'

import style from '~/styles/filterCheckbox.module.sass'

function FilterCheckbox() {
    const dispatch = useDispatch()
    const expandedView = useSelector((state) => state.anime.expandedView)

    function handleClick() {
        dispatch.anime.updateExpandedView(!expandedView)
    }
    return (
        <div className={style.expandView}>
            <p className={style.text}>Expanded View</p>
            <Checkbox active={expandedView} handleClick={handleClick}/>
        </div>
    )
}

Checkbox.propTypes = {
    options: PropTypes.object
}

export default FilterCheckbox
