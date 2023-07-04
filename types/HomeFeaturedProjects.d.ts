import { StaticImageData } from 'next/image'
import { HomeProjectType } from './HomeProject'

export type HomeFeaturedProjectType = Omit<HomeProjectType, 'description'>
