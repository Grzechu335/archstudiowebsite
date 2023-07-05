'use client'
import Image from 'next/image'
import React from 'react'
import { PortfolioProjectType } from '../../../../types/PortfolioProject'
import useDevice from '../../../../hooks/useDevice'

const PortfolioItem: React.FC<PortfolioProjectType> = ({
    id,
    images,
    title,
    date,
}) => {
    const device = useDevice()
    const responsiveSource = () => {
        if (typeof device !== 'undefined') {
            if (device === 'sm') {
                return images.sm
            } else if (device === 'md') {
                return images.md
            } else return images.lg
        } else return images.lg
    }
    return (
        <div
            key={id}
            className="relative p-6 lg:p-[40px] hover:bg-white/50 transition-colors duration-200 h-[240px] lg:h-[560px] flex flex-col justify-end bg-gradient-to-b from-transparent to-black/50"
        >
            <Image
                src={responsiveSource()}
                alt={`${title} image`}
                fill
                className="-z-10"
            />
            <div className="relative z-10 text-white">
                <p className="heading-sm">{title}</p>
                <span className="text-white/75">{date}</span>
            </div>
        </div>
    )
}

export default PortfolioItem
