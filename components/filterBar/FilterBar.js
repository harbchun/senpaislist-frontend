import React from 'react'
import PropTypes from 'prop-types'
import { initStore, withRematch } from '~/rematch'

import style from '~/styles/filterBar.module.sass'

function FilterBar({ expandedView, updateExpandedView }) {
    return (
        <div className={style.filterBarContainer}>
            <div className={style.filterBar}>
                <div className={style.expandView}>
                    Expanded View
                    <button
                        className={style.expandOption}
                        onClick={() => updateExpandedView(!expandedView)}></button>
                </div>
                <div className={style.sortBy}>
                    Sort By
                    <div className={style.sortByOptions}></div>
                </div>
                <div className={style.search}>
                    Search
                    <div className={style.searchBar}></div>
                </div>
            </div>
        </div>
    )
}

FilterBar.propTypes = {
    expandedView: PropTypes.string.boolean,
    updateExpandedView: PropTypes.func
}

const mapState = (state) => ({
    expandedView: state.anime.expandedView
})

const mapDispatch = (dispatch) => ({
    updateExpandedView: dispatch.anime.updateExpandedView
})

export default withRematch(initStore, mapState, mapDispatch)(FilterBar)
