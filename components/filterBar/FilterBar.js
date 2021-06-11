import React from 'react'
import PropTypes from 'prop-types'
import FilterDropdown from '~/components/filterBar/filterDropdown/FilterDropdown'
import FilterCheckbox from '~/components/filterBar/filterCheckbox/FilterCheckbox'
import FilterSearch from '~/components/filterBar/filterSearch/FilterSearch'
import { initStore, withRematch } from '~/rematch'

import style from '~/styles/filterBar.module.sass'

function FilterBar({ expandedView, updateExpandedView }) {
    return (
        <div className={style.filterBarContainer}>
            <div className={style.filterBar}>
                <FilterCheckbox />
                <FilterDropdown />
                <FilterSearch />
            </div>
        </div>
    )
}

FilterBar.propTypes = {
    expandedView: PropTypes.bool,
    updateExpandedView: PropTypes.func
}

const mapState = (state) => ({
    expandedView: state.anime.expandedView
})

const mapDispatch = (dispatch) => ({
    updateExpandedView: dispatch.anime.updateExpandedView
})

export default withRematch(initStore, mapState, mapDispatch)(FilterBar)
