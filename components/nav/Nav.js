import React from 'react'

import style from '~/styles/nav.module.sass'

function Nav() {
    return (
        <div className={style.navContainer}>
            <p className={style.logo}>
                senpais<span className={style.logoColour}>list</span>
            </p>
            <div className={style.centerButtons}>
                <button className={style.trackerButton}>
                    <p>Tracker</p>
                    <div className={style.underline} />
                </button>
            </div>
            <button className={style.userDropdown}>
                <img alt="user-hamburger" src="/static/user-dropdown.svg"></img>
            </button>
        </div>
    )
}

export default Nav
