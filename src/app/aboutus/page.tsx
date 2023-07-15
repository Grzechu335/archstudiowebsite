import React from 'react'
import heroImageLg from 'public/assets/about/desktop/image-hero.jpg'
import heroImageMd from 'public/assets/about/tablet/image-hero.jpg'
import heroImageSm from 'public/assets/about/mobile/image-hero.jpg'
import FancyHero from '@/components/organisms/FancyHero'
import Heritage from '@/components/organisms/Heritage'
import Leaders from '@/components/organisms/Leaders'

const AboutUs: React.FC = () => {
    return (
        <section className="max-w-screen-lg mx-auto space-y-[112px] md:space-y-[200px]">
            <FancyHero
                header="About"
                title="Your team of professionals"
                description="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
                images={{
                    lg: heroImageLg,
                    md: heroImageMd,
                    sm: heroImageSm,
                }}
            />
            <Heritage />
            <Leaders />
        </section>
    )
}

export default AboutUs
