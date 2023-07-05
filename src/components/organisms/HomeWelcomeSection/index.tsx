import Image from 'next/image'
import React from 'react'
import welcomeImage from 'public/assets/home/desktop/image-welcome.jpg'

const HomeWelcomeSection: React.FC = () => {
    return (
        <section className="grid grid-cols-12 md:gap-[48px] lg:gap-[65px] relative">
            <h1 className="absolute left-0 z-10 hidden md:inline -top-36 lg:-top-32 heading-xl text-very-light-gray">
                Welcome
            </h1>
            <div className="flex flex-col space-y-12 lg:space-y-16 col-span-full lg:justify-end lg:col-span-6 lg:col-start-3">
                <h2 className="heading-md">Welcome to Arch Studio</h2>
                <div className="space-y-8">
                    <p>
                        We have a unique network and skillset to help bring your
                        projects to life. Our small team of highly skilled
                        individuals combined with our large network put us in a
                        strong position to deliver exceptional results.
                    </p>
                    <p>
                        Over the past 10 years, we have worked on all kinds of
                        projects. From stations to high-rise buildings, we
                        create spaces that inspire and delight.
                    </p>
                    <p>
                        We work closely with our clients so that we understand
                        the intricacies of each project. This allows us to work
                        in harmony the surrounding area to create truly stunning
                        projects that will stand the test of time.
                    </p>
                </div>
            </div>
            <div className="hidden col-span-4 place-content-end lg:grid">
                <Image
                    src={welcomeImage}
                    alt="welcome image"
                />
            </div>
        </section>
    )
}

export default HomeWelcomeSection
