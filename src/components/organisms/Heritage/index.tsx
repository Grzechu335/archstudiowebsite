import Image from 'next/image'
import heritageImage from 'public/assets/about/desktop/image-heritage.jpg'
import React from 'react'

const Heritage: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-[124px] relative pt-[82px]">
            <span className="absolute block w-[8%] left-0 top-0 h-[1px] bg-light-gray" />
            <div className="space-y-[50px] flex flex-col justify-end">
                <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] md:heading-md">
                    Our <br /> Heritage
                </h2>
                <p className="inline-block space-y-8">
                    <span className="inline-block">
                        Founded in 2007, we started as a trio of architects. Our
                        complimentary skills and relentless attention to detail
                        turned Arch into one of the most sought after boutique
                        firms in the country.
                    </span>
                    <br />
                    <span className="inline-block">
                        Speciliazing in Urban Design allowed us to focus on
                        creating exceptional structures that live in harmony
                        with their surroundings. We consider every detail from
                        every surrounding element to inform our designs.
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
    )
}

export default Heritage
