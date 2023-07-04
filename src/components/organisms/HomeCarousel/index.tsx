'use client'
import CarouselButtonGroup from '@/components/molecules/CarouselButtonGroup'
import React from 'react'
import Carousel from 'react-multi-carousel'
import carouselResponsiveSettings from '../../../../utils/carouselResponsiveSettings'
import homeProjects from '../../../../utils/homeProjects'
import CarouselItem from '@/components/molecules/CarouselItem'
import 'react-multi-carousel/lib/styles.css'

const HomeCarousel: React.FC = () => {
    return (
        <div className="relative -mx-8 md:mx-0">
            <Carousel
                arrows={false}
                autoPlay
                autoPlaySpeed={5000}
                renderButtonGroupOutside={true}
                customButtonGroup={<CarouselButtonGroup />}
                responsive={carouselResponsiveSettings}
            >
                {homeProjects.map((project) => (
                    <CarouselItem
                        key={project.id}
                        {...project}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default HomeCarousel
