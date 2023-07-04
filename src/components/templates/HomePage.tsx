import React from 'react'
import HomeCarousel from '../organisms/HomeCarousel'
import welcomeImage from 'public/assets/home/desktop/image-welcome.jpg'
import Image from 'next/image'

const HomePage = () => {
    return (
        <main className="relative max-w-screen-xl mx-auto lg:space-y-[200px]">
            <HomeCarousel />
            <div>
                <div className="grid md:grid-cols-2 gap-[125px]">
                    <div className="flex flex-col justify-end space-y-10">
                        <h1 className="heading-md">Welcome to Arch Studio</h1>
                        <p className="space-y-6 text-dark-gray">
                            <span className="block">
                                We have a unique network and skillset to help
                                bring your projects to life. Our small team of
                                highly skilled individuals combined with our
                                large network put us in a strong position to
                                deliver exceptional results.
                            </span>
                            <span className="block">
                                Over the past 10 years, we have worked on all
                                kinds of projects. From stations to high-rise
                                buildings, we create spaces that inspire and
                                delight.
                            </span>
                            <span className="block">
                                We work closely with our clients so that we
                                understand the intricacies of each project. This
                                allows us to work in harmony the surrounding
                                area to create truly stunning projects that will
                                stand the test of time.
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <Image
                            src={welcomeImage}
                            alt="welcome to arch studio image"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage
