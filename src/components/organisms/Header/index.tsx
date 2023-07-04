'use client'
import React, { useState } from 'react'
import logo from 'public/assets/logo.svg'
import Image from 'next/image'
import navItems from '../../../../utils/navItem'
import NavItem from '@/components/atoms/NavItem'
import hamburegIcon from 'public/assets/icons/icon-hamburger.svg'

const Header: React.FC = () => {
    const [open, setOpen] = useState(false)
    const handleMenuClick = () => {
        setOpen((prev) => !prev)
    }
    return (
        <div className="fixed top-0 left-0 w-screen h-[96px] md:h-[152px] p-8 md:p-0">
            <header className="flex justify-between md:justify-start md:space-x-[79px] lg:space-x-[95px] h-full items-center max-w-screen-xl mx-auto">
                <Image
                    src={logo}
                    alt="logo image"
                    width={100}
                    height={40}
                />
                <nav>
                    <ul className="items-center text-medium-gray space-x-[60px] hidden md:flex">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </ul>
                </nav>
                <div className="md:hidden">
                    <Image
                        src={hamburegIcon}
                        alt="menu icon"
                        onClick={handleMenuClick}
                    />
                </div>
            </header>
            {open && (
                <div className="fixed right-0 top-[96px] w-screen h-screen bg-[#000]/50">
                    <nav className="w-[calc(100vw-32px)] absolute right-0 bg-very-light-gray px-12 py-8">
                        <ul className="flex flex-col space-y-4 heading-sm">
                            {navItems.map((item) => (
                                <NavItem
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Header
