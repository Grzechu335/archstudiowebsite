import delSolImageLg from 'public/assets/portfolio/desktop/image-del-sol.jpg'
import delSolImageMd from 'public/assets/portfolio/tablet/image-del-sol.jpg'
import delSolImageSm from 'public/assets/portfolio/mobile/image-del-sol.jpg'
import towerImageLg from 'public/assets/portfolio/desktop/image-228b.jpg'
import towerImageMd from 'public/assets/portfolio/tablet/image-228b.jpg'
import towerImageSm from 'public/assets/portfolio/mobile/image-228b.jpg'
import prototypeImageLg from 'public/assets/portfolio/desktop/image-prototype.jpg'
import prototypeImageMd from 'public/assets/portfolio/tablet/image-prototype.jpg'
import prototypeImageSm from 'public/assets/portfolio/mobile/image-prototype.jpg'

const homeFeatureProjects = [
    {
        id: 0,
        title: 'Project Del Sol',
        alt: 'Project Del Sol image',
        images: {
            lg: delSolImageLg,
            md: delSolImageMd,
            sm: delSolImageSm,
        },
    },
    {
        id: 1,
        title: '228B Tower',
        alt: '228B Tower image',
        images: {
            lg: towerImageLg,
            md: towerImageMd,
            sm: towerImageSm,
        },
    },
    {
        id: 2,
        title: 'Le Prototype',
        alt: 'Le Prototype image',
        images: {
            lg: prototypeImageLg,
            md: prototypeImageMd,
            sm: prototypeImageSm,
        },
    },
]

export default homeFeatureProjects
