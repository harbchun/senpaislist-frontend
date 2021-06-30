import React from 'react'
import PropTypes from 'prop-types'
function MainLayout(props) {
    return (
        <>
            <div>{props.header}</div>
            <div>{props.tools}</div>
            <div>{props.children}</div>
        </>
    )
}

MainLayout.propTypes = {
    header: PropTypes.element,
    children: PropTypes.element,
    tools: PropTypes.element
}

export default MainLayout
