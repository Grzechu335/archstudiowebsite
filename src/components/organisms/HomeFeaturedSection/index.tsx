import Button from '@/components/atoms/Button'
import React from 'react'
import homeFeatureProjects from '../../../../utils/homeFeaturedProjects'
import HomeFeaturedSectionItem from '../HomeFeaturedSectionItem'

const HomeFeaturedSection: React.FC = () => {
    return (
        <section className="space-y-[65px]">
            <div className="flex items-center justify-between">
                <h3 className="heading-md">Featured</h3>
                <Button
                    className="hidden md:flex"
                    href="/portfolio"
                >
                    See All
                </Button>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-[30px]">
                {homeFeatureProjects.map((project) => (
                    <HomeFeaturedSectionItem
                        key={project.id}
                        {...project}
                    />
                ))}
                <Button
                    className="justify-center w-full md:hidden"
                    href="/portfolio"
                >
                    See All
                </Button>
            </div>
        </section>
    )
}

export default HomeFeaturedSection
