/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useComponentVisible from '~/helpers/hooks/click-outside'

import style from '~/styles/filterOrder.module.sass'

function Dropdown({ orders, isComponentVisible }) {
    const dispatch = useDispatch()

    function handleClick(order) {
        dispatch.anime.updateSort(order)
    }

    return (
        <div className={style.dropdown}
        style={{'display': (isComponentVisible ? '' : 'none')}}
        >
            {orders.map((order) => {
                        return (
                            <button key={order} className={style.orderButton} onClick={() => handleClick(order)}>
                                <p>{order.split(':')[0]}</p>
                            </button>                            
                        )
                    })}
        </div>
    )
}

function FilterOrder() {
    const orders = useSelector((state) => state.anime.orders)
    const order = useSelector((state) => state.anime.sort)
    const [active, setActive] = useState(false)
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    return (
        <div className={style.filterOrder} ref={ref}>
            <div className={style.orderButton} onClick={() => setIsComponentVisible(!isComponentVisible)} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <div className={style.textContainer}>
                    <p className={style.subtitle}>orders</p>
                    <p className={`${style.order} ${active ? style.orderActive : ''}`}>{order.split(':')[0]}</p>
                </div>
                <img className={style.arrowDown} src='/static/arrow-down.svg'/>
            </div>
            {orders ? 
            <Dropdown
                isComponentVisible={isComponentVisible}
                orders={orders}
            />
            :
            null
            }
        </div>
    )
}

export default FilterOrder
