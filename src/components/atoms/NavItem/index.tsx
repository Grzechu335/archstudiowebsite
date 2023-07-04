import Link from 'next/link'
import React from 'react'

type NavItemProps = {
    name: string
    href: string
}

const NavItem: React.FC<NavItemProps> = ({ name, href }) => {
    return (
        <li className="hover:text-very-dark-blue">
            <Link href={href}>{name}</Link>
        </li>
    )
}

export default NavItem
