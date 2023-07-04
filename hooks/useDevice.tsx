import React, { useEffect, useState } from 'react'

const useDevice = () => {
    const [device, setDevice] = useState<'sm' | 'md' | 'lg' | undefined>(
        undefined
    )
    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth < 375) {
                setDevice('sm')
            } else if (window.innerWidth >= 375 && window.innerWidth < 768) {
                setDevice('md')
            } else {
                setDevice('lg')
            }
        }
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    })
    return device
}

export default useDevice
