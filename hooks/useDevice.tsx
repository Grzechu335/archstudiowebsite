import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'

type useDeviceProps = {
    lg: StaticImageData
    md: StaticImageData
    sm: StaticImageData
}

const useDevice = ({ lg, md, sm }: useDeviceProps) => {
    const [device, setDevice] = useState<'sm' | 'md' | 'lg' | undefined>(
        undefined
    )
    const [image, setImage] = useState<StaticImport | string>(lg)
    useEffect(() => {
        const responsiveSource = () => {
            if (typeof device !== 'undefined') {
                if (device === 'sm') {
                    setImage(sm)
                } else if (device === 'md') {
                    setImage(md)
                } else setImage(lg)
            } else setImage(lg)
        }
        responsiveSource()
    }, [device, sm, md, lg])
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
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    })
    return { device, image }
}

export default useDevice
