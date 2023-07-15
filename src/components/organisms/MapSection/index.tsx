'use client'
import React from 'react'
import useDevice from '../../../../hooks/useDevice'
import mapImageLg from 'public/assets/contact/desktop/image-map.png'
import mapImageMd from 'public/assets/contact/tablet/image-map.png'
import mapImageSm from 'public/assets/contact/mobile/image-map.png'
import Image from 'next/image'

const MapSection: React.FC = () => {
    const { image } = useDevice({
        lg: mapImageLg,
        md: mapImageMd,
        sm: mapImageSm,
    })
    return (
        <div className="-mx-8 md:mx-0">
            <Image
                src={image}
                alt="map image"
                className="mx-auto"
            />
        </div>
    )
}

export default MapSection
