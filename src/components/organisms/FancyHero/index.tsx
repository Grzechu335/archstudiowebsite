'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import useDevice from '../../../../hooks/useDevice'

type FancyHeroProps = {
    header: string
    title: string
    description: string
    images: {
        lg: StaticImageData
        md: StaticImageData
        sm: StaticImageData
    }
}

const FancyHero: React.FC<FancyHeroProps> = ({
    header,
    title,
    description,
    images,
}) => {
    const { image } = useDevice({ ...images })
    return (
        <div className="relative flex flex-col">
            <div className="md:absolute relative -top-[45px] -left-8  md:top-auto order-2 md:left-0 md:bottom-0 w-full md:grid md:grid-cols-10 lg:grid-cols-12  md:h-[431px] lg:h-[503px] z-10">
                <div className="relative grid px-8 bg-white md:col-start-2 md:px-0 md:col-span-9 md:grid-cols-9 lg:grid-cols-7 lg:col-span-7 lg:col-start-6">
                    <h1 className="absolute hidden md:inline md:top-[10px] lg:top-[36px] right-0 lg:left-0 transform translate-y-[-50%] z-20 heading-xl text-very-light-gray">
                        {header}
                    </h1>
                    <div className="flex flex-col justify-end space-y-12 md:col-start-2 md:col-span-8 lg:col-span-6 lg:col-start-3 ">
                        <span className="h-[1px] w-[65px] bg-light-gray hidden md:block" />
                        <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] md:heading-md">
                            {title}
                        </h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className="grid order-1 md:grid-cols-10 lg:grid-cols-12 gap-[48px] lg:gap-[65px]">
                <div className="relative col-span-full -mx-8 md:mx-0 lg:col-span-7 h-[240px] md:h-[720px]">
                    <Image
                        src={image}
                        alt="hero image"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default FancyHero
