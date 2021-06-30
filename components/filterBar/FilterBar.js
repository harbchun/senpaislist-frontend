import React from 'react'
import PropTypes from 'prop-types'
import FilterDropdown from '~/components/filterBar/filterDropdown/FilterDropdown'
import FilterCheckbox from '~/components/filterBar/filterCheckbox/FilterCheckbox'
import FilterSearch from '~/components/filterBar/filterSearch/FilterSearch'
import useMediaQuery from '~/helpers/hooks/media-query'

import style from '~/styles/filterBar.module.sass'

function FilterBar() {
    let small = useMediaQuery('(max-width: 700px)')
    return (
        <div className={style.filterBarContainer}>
            <div className={style.filterBar}>
                <FilterCheckbox />
                {small ? null : <FilterDropdown />}
                <FilterSearch />
            </div>
        </div>
    )
}

export default FilterBar
