'use client'
import React, { useState } from 'react'
import logo from 'public/assets/logo.svg'
import Image from 'next/image'
import navItems from '../../../../utils/navItem'
import NavItem from '@/components/atoms/NavItem'
import hamburegIcon from 'public/assets/icons/icon-hamburger.svg'
import Link from 'next/link'
import { AnimatePresence, motion as m } from 'framer-motion'

const Header: React.FC = () => {
    const [open, setOpen] = useState(false)
    const handleMenuClick = () => {
        setOpen((prev) => !prev)
    }
    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <div className="fixed top-0 left-0 z-[999] bg-[#fff] w-screen h-[96px] md:h-[152px] wrapper-padding">
            <header className="flex justify-between md:justify-start md:space-x-[79px] lg:space-x-[95px] h-full items-center max-w-screen-lg mx-auto">
                <Link
                    href="/"
                    onClick={closeMenu}
                >
                    <div className="relative w-[70px] h-[32px] md:w-[96px] md:h-[40px] ">
                        <Image
                            src={logo}
                            alt="logo image"
                            fill
                        />
                    </div>
                </Link>
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
            <AnimatePresence>
                {open && (
                    <div className="fixed right-0 top-[96px] w-screen h-screen bg-[#000]/50">
                        <m.nav
                            key="nav"
                            initial={{
                                x: 500,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            exit={{
                                x: 500,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.15,
                            }}
                            className="w-[calc(100vw-32px)] absolute right-0 bg-very-light-gray px-12 py-8"
                        >
                            <ul className="flex flex-col space-y-4 heading-sm">
                                {navItems.map((item) => (
                                    <NavItem
                                        closeMenu={closeMenu}
                                        key={item.id}
                                        {...item}
                                    />
                                ))}
                            </ul>
                        </m.nav>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Header
