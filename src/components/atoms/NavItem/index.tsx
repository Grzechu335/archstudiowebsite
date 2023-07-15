'use client'
import Link from 'next/link'
import React from 'react'

type NavItemProps = {
    name: string
    href: string
    closeMenu?: () => void
}

const NavItem: React.FC<NavItemProps> = ({ name, href, closeMenu }) => {
    return (
        <li className="hover:text-very-dark-blue whitespace-nowrap">
            <Link
                href={href}
                onClick={closeMenu ? closeMenu : undefined}
            >
                {name}
            </Link>
        </li>
    )
}

export default NavItem
