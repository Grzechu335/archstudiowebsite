import React from 'react'
import arrowIcon from 'public/assets/icons/icon-arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge as tw } from 'tailwind-merge'
import ArrowIcon from '@/components/icons/ArrowIcon'

type ButtonProps = {
    className?: string
    children?: React.ReactNode
    href?: string
    arrowStroke?: string
}

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    href,
    arrowStroke = '#fff',
}) => {
    const content = href ? (
        <Link
            href={href ? href : ''}
            className={tw(
                'flex w-fit items-center bg-very-dark-blue active:bg-medium-gray text-very-light-gray hover:bg-dark-gray space-x-6 py-6 px-8',
                className
            )}
        >
            <span className="font-bold">{children}</span>
            <ArrowIcon arrowStroke={arrowStroke} />
        </Link>
    ) : (
        <button
            type="button"
            className={tw(
                'flex w-fit items-center bg-very-dark-blue active:bg-medium-gray text-very-light-gray hover:bg-dark-gray space-x-6 py-6 px-8',
                className
            )}
        >
            <span className="font-bold">{children}</span>
            <ArrowIcon arrowStroke={arrowStroke} />
        </button>
    )
    return content
}

export default Button
