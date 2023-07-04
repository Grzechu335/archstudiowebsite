import homeFeatureProjects from '../../../utils/homeFeaturedProjects'
import Button from '../atoms/Button'
import HomeCarousel from '../organisms/HomeCarousel'
import HomeFeaturedSection from '../organisms/HomeFeaturedSection'
import HomeSmallTeamSection from '../organisms/HomeSmallTeamSection'
import HomeWelcomeSection from '../organisms/HomeWelcomeSection'

const HomePage = () => {
    return (
        <main className="relative max-w-screen-xl mx-auto space-y-[112px] md:space-y-[240px] lg:space-y-[200px]">
            <HomeCarousel />
            <HomeWelcomeSection />
            <HomeSmallTeamSection />
            <HomeFeaturedSection />
        </main>
    )
}

export default HomePage
