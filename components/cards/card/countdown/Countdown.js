import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from '~/styles/card.module.sass'

function Countdown({ broadcastTime }) {
    const timeString = 'Wed, 08 Jan 2021 08:07:06 +0900'
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    setInterval(function () {
        const broadcastDate = new Date(timeString)
        const currentDate = new Date()
        const difference = broadcastDate - currentDate
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000))
    }, 1000)

    return (
        <p className={style.countdown}>
            EP11: {days}d {hours}h {minutes}m {seconds}s
        </p>
    )
}

Countdown.propTypes = {
    broadcastTime: PropTypes.string
}

export default Countdown
