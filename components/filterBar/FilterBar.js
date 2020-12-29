import React from 'react'

import style from '~/styles/filterBar.module.sass'

function FilterBar() {
    return (
        <div className={style.filterBarContainer}>
            <div className={style.filterBar}>
                <div className={style.expandView}>
                    Expanded View
                    <div className={style.expandOption}></div>
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

export default FilterBar
