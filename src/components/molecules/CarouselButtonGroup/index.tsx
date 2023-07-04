import React from 'react'
import { ButtonGroupProps } from 'react-multi-carousel'
import homeProjects from '../../../../utils/homeProjects'
import CarouselButton from '@/components/atoms/CarouselButton'

const CarouselButtonGroup: React.FC<ButtonGroupProps> = ({
    carouselState,
    goToSlide,
}) => {
    const { currentSlide } = carouselState!
    return (
        <div className="absolute bottom-0 hidden left-[-80px] md:flex">
            {homeProjects.map((project) => (
                <CarouselButton
                    key={project.id}
                    id={project.id}
                    currentSlide={currentSlide}
                    goToSlide={goToSlide}
                />
            ))}
        </div>
    )
}

export default CarouselButtonGroup
