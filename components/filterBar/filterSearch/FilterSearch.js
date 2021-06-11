import React from 'react'
import Input from '~/components/public/input/Input'
import { initStore, withRematch } from '~/rematch'
import { useDispatch } from 'react-redux'

import style from '~/styles/filterSearch.module.sass'

function FilterSearch() {
    const dispatch = useDispatch()

    return (
        <div className={style.filterSearch}>
            <p className={style.filterName}>Search</p>
            <Input updateValue={dispatch.anime.updateText} />
        </div>
    )
}

export default withRematch(initStore)(FilterSearch)
