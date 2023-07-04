'use client'
import clsx from 'clsx'
import React from 'react'
import { SkipCallbackOptions } from 'react-multi-carousel'

type CarouselButtonProps = {
    id: number
    currentSlide: number
    goToSlide:
        | ((
              index: number,
              skipCallbacks?: SkipCallbackOptions | undefined
          ) => void)
        | undefined
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
    id,
    currentSlide,
    goToSlide,
}) => {
    return (
        <button
            className={clsx(
                'grid w-20 h-20 hover:bg-light-gray transition-colors duration-150 place-content-center',
                {
                    'bg-very-dark-blue text-[#fff]': currentSlide === id,
                    'bg-[#fff] text-dark-gray': currentSlide !== id,
                }
            )}
            // @ts-ignore
            onClick={() => goToSlide(id)}
        >
            {id + 1}
        </button>
    )
}

export default CarouselButton
