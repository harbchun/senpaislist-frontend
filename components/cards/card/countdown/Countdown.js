import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from '~/styles/card.module.sass'

function Countdown({ broadcastTime, nextBroadcast }) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    setInterval(function () {
        const broadcastDate = new Date(nextBroadcast)
        const currentDate = new Date()
        const difference = broadcastDate - currentDate
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000))
    }, 1000)

    if (nextBroadcast === 'N/A' || seconds < 0) {
        if (broadcastTime === 'N/A' || broadcastTime === 'unknown') {
            broadcastTime = '-'
        }
        return <p className={style.countdown}>
            {broadcastTime}
        </p>
    }

    return (
        <p className={style.countdown}>
            {days}d {hours}h {minutes}m {seconds}s
        </p>
    )
}

Countdown.propTypes = {
    broadcastTime: PropTypes.string,
    nextBroadcast: PropTypes.string
}

export default Countdown
