'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HomeProjectType } from '../../../../types/HomeProject'
import Button from '@/components/atoms/Button'

const CarouselItem: React.FC<HomeProjectType> = ({
    images,
    alt,
    title,
    description,
}) => {
    const [device, setDevice] = useState<'sm' | 'md' | 'lg' | undefined>(
        undefined
    )
    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth < 375) {
                setDevice('sm')
            } else if (window.innerWidth >= 375 && window.innerWidth < 768) {
                setDevice('md')
            } else {
                setDevice('lg')
            }
        }
        window.addEventListener('resize', resizeHandler)
    })

    const setSource = () => {
        if (typeof device !== 'undefined') {
            if (device === 'sm') {
                return images.sm
            } else if (device === 'md') {
                return images.md
            } else return images.lg
        } else return images.lg
    }
    return (
        <div className="relative flex flex-col space-y-10 bg-[#000]/50 px-8 md:px-[58px] justify-center lg:px-[190px] h-[720px] w-full">
            <Image
                src={setSource()}
                alt={alt}
                fill
                quality={100}
                className="-z-10"
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
