import React from 'react'

import Card from '~/components/cards/card/Card'
import CardSkeleton from '~/components/cards/card/CardSkeleton'

import style from '~/styles/cards.module.sass'

function Cards() {
    const loaded = true
    const skeletonCards = (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    )

    if (!loaded) {
        return <div className={style.cards}>{skeletonCards}</div>
    }
    return (
        <div className={style.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Cards
