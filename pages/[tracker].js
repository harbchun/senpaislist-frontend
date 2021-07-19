import React, { useEffect } from 'react'
import MainLayout from '~/components/layouts/mainLayout/MainLayout'
import Nav from '~/components/nav/Nav'
import Calendar from '~/components/calendar/Calendar'
import FilterSearch from '~/components/filterBar/filterSearch/FilterSearch'
import Cards from '~/components/cards/Cards'
import validateTrackerUrl from '~/helpers/validateTrackerUrl'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { initializeStore } from '~/rematch/store'

function Home() {
    const router = useRouter()
    const dispatch = useDispatch()
    const year = useSelector((state) => state.anime.year)
    const years = useSelector((state) => state.anime.years)
    const season = useSelector((state) => state.anime.season)
    const seasons = useSelector((state) => state.anime.seasons)
    useEffect(() => {
        const splitQuery = validateTrackerUrl(router.query, years, seasons)

        if (splitQuery) {
            dispatch.anime.updateYear(splitQuery[0])
            dispatch.anime.updateSeason(splitQuery[1])
        }
    }, [])

    useEffect(() => {
        router.push(`${year}-${season.toLowerCase()}`, undefined, { shallow: true })
    }, [year, season])

    return (
        <MainLayout
            header={<Nav />}
            tools={
                <div>
                    <Calendar />
                    <FilterSearch />
                </div>
            }>
            <>
                <Cards />
            </>
        </MainLayout>
    )
}

export default Home

export async function getServerSideProps(ctx) {
    const store = initializeStore()
    await store.dispatch.anime.fetchYears()
    await store.dispatch.anime.trackerSetup(ctx.query)

    return { props: { initialReduxState: store.getState() } }
}
