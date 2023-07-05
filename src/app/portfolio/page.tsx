import React from 'react'
import portfolioProjects from '../../../utils/portfolio'
import Image from 'next/image'
import PortfolioItem from '@/components/molecules/PortfolioItem'

const Portfolio: React.FC = () => {
    return (
        <section className="grid lg:grid-cols-3 lg:gap-[30px] gap-6 max-w-screen-lg mx-auto">
            {portfolioProjects.map((project) => (
                <PortfolioItem
                    key={project.id}
                    {...project}
                />
            ))}
        </section>
    )
}

export default Portfolio
