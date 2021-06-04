import MainLayout from '~/components/layouts/mainLayout/MainLayout'
import Nav from '~/components/nav/Nav'
import Calendar from '~/components/calendar/Calendar'
import FilterBar from '~/components/filterBar/FilterBar'
import Cards from '~/components/cards/Cards'
import useComponentVisible from '../helpers/hooks/click-outside'

export default function Home() {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    return (
        <>
            <MainLayout
                header={<Nav />}
                tools={
                    <div ref={ref}>
                        <Calendar
                            isComponentVisible={isComponentVisible}
                            setIsComponentVisible={setIsComponentVisible}
                        />
                        <FilterBar />
                    </div>
                }>
                <>
                    <Cards />
                </>
            </MainLayout>
        </>
    )
}
