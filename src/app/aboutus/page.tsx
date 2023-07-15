import React from 'react'
import heroImageLg from 'public/assets/about/desktop/image-hero.jpg'
import heroImageMd from 'public/assets/about/tablet/image-hero.jpg'
import heroImageSm from 'public/assets/about/mobile/image-hero.jpg'
import FancyHero from '@/components/organisms/FancyHero'
import heritageImage from 'public/assets/about/desktop/image-heritage.jpg'
import Image from 'next/image'
import leaders from '../../../utils/leaders'

const AboutUs: React.FC = () => {
    return (
        <section className="max-w-screen-lg mx-auto space-y-[112px] md:space-y-[200px]">
            <FancyHero
                header="About"
                title="Your team of professionals"
                description="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
                images={{
                    lg: heroImageLg,
                    md: heroImageMd,
                    sm: heroImageSm,
                }}
            />
            <div className="grid lg:grid-cols-2 gap-[124px] relative pt-[82px]">
                <span className="absolute block w-[8%] left-0 top-0 h-[1px] bg-light-gray" />
                <div className="space-y-[50px] flex flex-col justify-end">
                    <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] md:heading-md">
                        Out <br /> Heritage
                    </h2>
                    <p className="inline-block space-y-8">
                        <span className="inline-block">
                            Founded in 2007, we started as a trio of architects.
                            Our complimentary skills and relentless attention to
                            detail turned Arch into one of the most sought after
                            boutique firms in the country.
                        </span>
                        <br />
                        <span className="inline-block">
                            Speciliazing in Urban Design allowed us to focus on
                            creating exceptional structures that live in harmony
                            with their surroundings. We consider every detail
                            from every surrounding element to inform our
                            designs.
                        </span>
                        <br />
                        <span className="inline-block">
                            Our small team of world-class professionals provides
                            input on every project.
                        </span>
                    </p>
                </div>
                <Image
                    className="hidden lg:block"
                    src={heritageImage}
                    alt="heritage image"
                />
            </div>
            <div className="grid lg:grid-cols-3 gap-[30px]">
                <div>
                    <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] md:heading-md">
                        The <br /> Leaders
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 col-span-2 gap-[80px] md:gap-x-[11px] md:gap-y-[100px] lg:gap-[30px]">
                    {leaders.map((leader) => (
                        <div
                            key={leader.id}
                            className="space-y-[15px] mx-auto"
                        >
                            <Image
                                src={leader.image}
                                alt={`${leader.name} image`}
                            />
                            <div>
                                <p className="text-black heading-sm">
                                    {leader.name}
                                </p>
                                <p>{leader.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUs
