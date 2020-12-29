import MainLayout from '~/components/layouts/mainLayout/MainLayout'
import Nav from '~/components/nav/Nav'
import Calendar from '~/components/calendar/Calendar'
import FilterBar from '~/components/filterBar/FilterBar'
import Cards from '~/components/cards/Cards'

export default function Home() {
    return (
        <>
            <MainLayout header={<Nav />}>
                <>
                    <Calendar />
                    <FilterBar />
                    <Cards />
                </>
            </MainLayout>
        </>
    )
}
