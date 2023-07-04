import React from 'react'
import arrowIcon from 'public/assets/icons/icon-arrow.svg'
import Image from 'next/image'
import Link from 'next/link'

type ButtonProps = {
    className?: string
    children?: React.ReactNode
    href?: string
}

const Button: React.FC<ButtonProps> = ({ className, children, href }) => {
    return (
        <Link
            href={href ? href : ''}
            className={`flex w-fit items-center bg-very-dark-blue active:bg-medium-gray text-very-light-gray hover:bg-dark-gray space-x-6 py-6 px-8 ${className}`}
        >
            <span className="font-bold">{children}</span>
            <Image
                src={arrowIcon}
                alt=""
            />
        </Link>
    )
}

export default Button
