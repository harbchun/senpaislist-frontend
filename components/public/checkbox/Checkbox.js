/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import style from '~/styles/checkbox.module.sass'

function Checkbox({ active, handleClick }) {
    return (
        <button onClick={handleClick} className={`${style.checkbox} ${ active ? style.checkboxActive : ''}`}>
            <img src="/static/check-mark.svg" className={`${style.checkmark} ${ active ? style.checkmarkActive : ''}`}></img>
        </button>
    )
}

Checkbox.propTypes = {
    options: PropTypes.object
}

export default Checkbox
