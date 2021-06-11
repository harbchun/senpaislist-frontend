/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import style from '~/styles/input.module.sass'

function Input({ updateValue }) {
    function handleChange(e) {
        updateValue(e.target.value)
    }

    return (
        <input className={style.input} onChange={handleChange}></input>
    )
}

Input.propTypes = {
    updateValue: PropTypes.func
}

export default Input
