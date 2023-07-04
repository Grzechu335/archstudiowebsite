import { StaticImageData } from 'next/image'

export type HomeProjectType = {
    id: number
    title: string
    description: string
    images: {
        lg: StaticImageData
        md: StaticImageData
        sm: StaticImageData
    }
    alt: string
}
