'use client'
import Button from '@/components/atoms/Button'
import Image from 'next/image'
import React from 'react'
import useDevice from '../../../../hooks/useDevice'
import { HomeProjectType } from '../../../../types/HomeProject'

const CarouselItem: React.FC<HomeProjectType> = ({
    images,
    alt,
    title,
    description,
}) => {
    const { image } = useDevice({ ...images })

    return (
        <div className="relative flex flex-col space-y-10 bg-black/50 px-8 md:px-[58px] justify-center lg:px-[190px] h-[720px] w-full">
            <Image
                src={image}
                alt={alt}
                fill
                quality={100}
                className="relative pointer-events-none -z-50"
            />
            <div className="space-y-[10px] lg:w-[90%]">
                <h2 className="heading-lg text-very-light-gray">{title}</h2>
                <p className="text-very-light-gray">{description}</p>
            </div>
            <Button href="/portfolio">See Our Portfolio</Button>
        </div>
    )
}

export default CarouselItem
