import projectParamourImageLg from 'public/assets/home/desktop/image-hero-paramour.jpg'
import seraphStationImageLg from 'public/assets/home/desktop/image-hero-seraph.jpg'
import federalTowerImageLg from 'public/assets/home/desktop/image-hero-federal.jpg'
import trinityBankImageLg from 'public/assets/home/desktop/image-hero-trinity.jpg'
import projectParamourImageMd from 'public/assets/home/tablet/image-hero-paramour.jpg'
import seraphStationImageMd from 'public/assets/home/tablet/image-hero-seraph.jpg'
import federalTowerImageMd from 'public/assets/home/tablet/image-hero-federal.jpg'
import trinityBankImageMd from 'public/assets/home/tablet/image-hero-trinity.jpg'
import projectParamourImageSm from 'public/assets/home/mobile/image-hero-paramour.jpg'
import seraphStationImageSm from 'public/assets/home/mobile/image-hero-seraph.jpg'
import federalTowerImageSm from 'public/assets/home/mobile/image-hero-federal.jpg'
import trinityBankImageSm from 'public/assets/home/mobile/image-hero-trinity.jpg'

const homeProjects = [
    {
        id: 0,
        title: 'Project Paramour',
        description:
            'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
        images: {
            lg: projectParamourImageLg,
            md: projectParamourImageMd,
            sm: projectParamourImageSm,
        },
        alt: 'Project Paramour image',
    },
    {
        id: 1,
        title: 'Seraph Station',
        description:
            'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
        images: {
            lg: seraphStationImageLg,
            md: seraphStationImageMd,
            sm: seraphStationImageSm,
        },
        alt: 'Seraph Station image',
    },
    {
        id: 2,
        title: 'Federal II Tower',
        description:
            'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
        images: {
            lg: federalTowerImageLg,
            md: federalTowerImageMd,
            sm: federalTowerImageSm,
        },
        alt: 'Federal Towar image',
    },
    {
        id: 3,
        title: 'Trinity Bank Tower',
        description:
            'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
        images: {
            lg: trinityBankImageLg,
            md: trinityBankImageMd,
            sm: trinityBankImageSm,
        },
        alt: 'Trinity Bank image',
    },
]

export default homeProjects
