import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { initializeStore } from '~/rematch/store'

function Home() {
    const router = useRouter()
    const year = useSelector((state) => state.anime.year)
    const season = useSelector((state) => state.anime.season)

    useEffect(() => {
        router.push(`${year}-${season.toLowerCase()}`)
    }, [])

    return <div></div>
}

export default Home

export async function getServerSideProps(ctx) {
    const store = initializeStore()
    await store.dispatch.anime.trackerSetup(ctx.query)

    return { props: { initialReduxState: store.getState() } }
}
