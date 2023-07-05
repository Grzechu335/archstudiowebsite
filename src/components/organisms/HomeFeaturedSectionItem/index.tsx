'use client'
import React from 'react'
import useDevice from '../../../../hooks/useDevice'
import { HomeFeaturedProjectType } from '../../../../types/HomeFeaturedProjects'
import Image from 'next/image'
import Link from 'next/link'

const HomeFeaturedSectionItem: React.FC<HomeFeaturedProjectType> = ({
    alt,
    id,
    images,
    title,
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
        <div className="relative bg-gradient-to-b flex flex-col justify-end from-transparent to-black/50 h-[240px] lg:h-[560px] p-[40px]">
            <Image
                src={responsiveSource()}
                alt={alt}
                fill
                className="-z-10"
            />
            <span className="absolute hidden md:inline-block right-5 lg:-right-3 top-10  text-[250px] tracking-[-5px] font-bold leading-[200px] text-white/50 ">
                {id + 1}
            </span>
            <h4 className="text-white heading-sm">{title}</h4>
            <Link
                className="text-white inline-block w-fit relative text-opacity-75 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:transition-all after:duration-500 after:bg-white/75 hover:after:w-full"
                href="/projects"
            >
                View All Projects
            </Link>
        </div>
    )
}

export default HomeFeaturedSectionItem
