import Link from 'next/link'
import React from 'react'
import navItems from '../../../../utils/navItem'
import NavItem from '@/components/atoms/NavItem'
import Button from '@/components/atoms/Button'
import logoWhite from 'public/assets/logoWhite.svg'
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <footer className="max-w-screen-lg relative lg:mx-auto mt-[170px] md:mt-[200px] -mx-8  md:-mx-[100px]">
            <div className="flex flex-col md:flex-row md:space-x-[40px] lg:space-x-[85px] items-center bg-very-light-gray  w-full md:w-[85%] lg:w-[90%]">
                {/* Image */}
                <Link href="/">
                    <div className="bg-very-dark-blue transform -translate-y-[50%] md:translate-y-0 lg:w-[200px] lg:h-[200px] w-[120px] h-[120px] grid place-content-center">
                        <div className="relative lg:w-[96px] lg:h-[40px] w-[58px] h-[24px]">
                            <Image
                                src={logoWhite}
                                alt="logo image"
                                fill
                            />
                        </div>
                    </div>
                </Link>
                {/* Nav */}
                <nav>
                    <ul className="flex flex-col md:flex-row md:space-x-[60px] space-y-8 md:space-y-0">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </ul>
                </nav>
                {/* Button */}
                <Button
                    href="/portfolio"
                    className="right-0 mt-8 md:mt-0 flex justify-center md:absolute md:w-fit w-[80%]"
                >
                    See Our Portfolio
                </Button>
            </div>
        </footer>
    )
}

export default Footer
