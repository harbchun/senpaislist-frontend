/* eslint-disable */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useComponentVisible from '~/helpers/hooks/click-outside'

import style from '~/styles/dropdown.module.sass'

function Pod({ title, content, fullValue, setSelectActive, updateSort }) {
    const [active, setActive] = useState(false)

    if (!fullValue) {
        fullValue = title
    } else {
        fullValue += ':' + title
    }

    function handleClick() {
        if (!content && setSelectActive && updateSort) {
            setSelectActive(false)
            updateSort(fullValue)
        }
    }

    return (
        <div
            className={`${style.select} ${active ? style.selectActive : ''}`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={handleClick}>
            <div>{title}</div>
            {content ? (
                <div style={{ display: 'flex' }}>
                    <div
                        className={`${style.spaceBetween} ${
                            active ? style.spaceBetweenActive : ''
                        }`}></div>
                    <div
                        className={`${style.subDropdown} ${active ? style.subDropdownActive : ''}`}>
                        <SubDropdown
                            options={content}
                            fullValue={fullValue}
                            setSelectActive={setSelectActive}
                            updateSort={updateSort}
                        />{' '}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

Pod.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    fullValue: PropTypes.string,
    setSelectActive: PropTypes.func
}

function SubDropdown({ options, fullValue, setSelectActive, updateSort }) {
    return (
        <div>
            {!(options instanceof Array)
                ? Object.entries(options).map((value) => {
                      return (
                          <Pod
                              title={value[0]}
                              content={value[1]}
                              key={value[0]}
                              fullValue={fullValue}
                              setSelectActive={setSelectActive}
                              updateSort={updateSort}
                          />
                      )
                  })
                : options.map(function (value) {
                      return (
                          <Pod
                              title={value}
                              key={value}
                              fullValue={fullValue}
                              setSelectActive={setSelectActive}
                              updateSort={updateSort}
                          />
                      )
                  })}
        </div>
    )
}

SubDropdown.propTypes = {
    options: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    fullValue: PropTypes.string,
    setSelectActive: PropTypes.func
}

function Dropdown({ options, value, updateSort }) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    return (
        <div className={style.dropdown} ref={ref}>
            <button
                className={style.selected}
                onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <Pod title={value} />
            </button>
            <div
                className={`${style.selectContainer} ${
                    isComponentVisible ? style.selectContainerActive : ''
                }`}>
                {!(options instanceof Array)
                    ? Object.entries(options).map((value) => {
                          return (
                              <Pod
                                  title={value[0]}
                                  content={value[1]}
                                  key={value[0]}
                                  setSelectActive={setIsComponentVisible}
                                  updateSort={updateSort}
                              />
                          )
                      })
                    : options.map(function (value) {
                          return (
                              <Pod
                                  title={value}
                                  key={value}
                                  setSelectActive={setIsComponentVisible}
                                  updateSort={updateSort}
                              />
                          )
                      })}
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    options: PropTypes.object
}

export default Dropdown
