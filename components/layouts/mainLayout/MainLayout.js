import React from 'react'
import PropTypes from 'prop-types'

import style from '~/styles/main-layout.module.sass'

function MainLayout(props) {
    return (
        <>
            <div className="main-header">{props.header}</div>
            <div className={style.tools}>{props.tools}</div>
            <div className={style.mainBody}>{props.children}</div>
        </>
    )
}

MainLayout.propTypes = {
    header: PropTypes.element,
    children: PropTypes.element,
    tools: PropTypes.element
}

export default MainLayout
