import React from 'react'

import style from '~/styles/nav.module.sass'

function Nav() {
    return (
        <div className={style.navContainer}>
            <img className={style.navLogo} src="/static/senpai-icon.png" alt="logo"></img>
        </div>
    )
}

export default Nav
