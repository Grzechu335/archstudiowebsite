import { StaticImageData } from 'next/image'
import { HomeProjectType } from './HomeProject'

export type PortfolioProjectType = {
    id: number
    title: string
    date: string
    images: {
        lg: StaticImageData
        md: StaticImageData
        sm: StaticImageData
    }
}
