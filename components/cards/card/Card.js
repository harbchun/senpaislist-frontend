import React from 'react'
import PropTypes from 'prop-types'
import { initStore, withRematch } from '~/rematch'
import Countdown from '~/components/cards/card/countdown/Countdown'
import Drawer from '~/components/cards/card/drawer/Drawer'

import style from '~/styles/card.module.sass'

function Card({ title, broadcastTime, nextBroadcast, imgUrl, genres, score, expandedView }) {
    return (
        <div className={`${style.card} ${expandedView ? style.expanded : ''}`}>
            <div role="presentation" className={`${style.cardBody}`}>
                <div className={style.cardHeader}>
                    <div className={style.score}>{score}</div>
                    <div className={style.addButton}>
                        <div className={style.positive} />
                        <div className={style.negative} />
                    </div>
                </div>
                <img src={imgUrl} alt="thumbnail" className={style.thumbnail} />
                <p className={style.title}>{title}</p>
                <Drawer genres={genres} />
            </div>
            <Countdown 
                broadcastTime={broadcastTime}
                nextBroadcast={nextBroadcast}
            />
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    broadcastTime: PropTypes.string,
    nextBroadcast: PropTypes.string,
    score: PropTypes.string,
    imgUrl: PropTypes.string,
    genres: PropTypes.array,
    expandedView: PropTypes.string.boolean
}

const mapState = (state) => ({
    expandedView: state.anime.expandedView
})

const mapDispatch = (dispatch) => ({})

export default withRematch(initStore, mapState, mapDispatch)(Card)
