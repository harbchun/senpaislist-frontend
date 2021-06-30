import React from 'react'
import Dropdown from '~/components/public/dropdown/Dropdown'
import { useSelector, useDispatch } from 'react-redux'
import style from '~/styles/filterDropdown.module.sass'

function FilterDropdown() {
    const options = {
        Title: ['Ascending', 'Descending'],
        Score: ['Ascending', 'Descending'],
        Popularity: ['Ascending', 'Descending']
    }

    const dispatch = useDispatch()
    const sort = useSelector((state) => state.anime.sort)
    const value = sort.split(':')[0]

    return (
        <div className={style.filterDropdown}>
            <p className={style.filterName}>Sort By</p>
            <Dropdown options={options} value={value} updateSort={dispatch.anime.updateSort} />
        </div>
    )
}

export default FilterDropdown
