'use client'
import Button from '@/components/atoms/Button'
import Image from 'next/image'
import React from 'react'
import smallTeamLg from 'public/assets/home/desktop/image-small-team.jpg'
import smallTeamMd from 'public/assets/home/tablet/image-small-team.jpg'
import smallTeamSm from 'public/assets/home/mobile/image-small-team.jpg'
import useDevice from '../../../../hooks/useDevice'

const HomeSmallTeamSection: React.FC = () => {
    const device = useDevice()
    const responsiveSource = () => {
        if (typeof device !== 'undefined') {
            if (device === 'sm') {
                return smallTeamLg
            } else if (device === 'md') {
                return smallTeamMd
            } else return smallTeamMd
        } else return smallTeamSm
    }
    return (
        <section className="-mx-8">
            <div className="relative h-[560px] w-full bg-[#000]/50 lg:px-[190px] md:px-[58px] px-8 flex flex-col justify-center">
                <Image
                    src={responsiveSource()}
                    alt="small team image"
                    fill
                    className="-z-10"
                />
                <div className="z-10 space-y-7 w-fit">
                    <h2 className="text-[#fff] heading-lg">
                        Small team <br /> big ideas
                    </h2>
                    <Button href="/aboutus">About us</Button>
                </div>
            </div>
        </section>
    )
}

export default HomeSmallTeamSection
