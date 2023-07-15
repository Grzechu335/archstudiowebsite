import * as React from 'react'

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
    arrowStroke?: string
}
const ArrowIcon: React.FC<ArrowIconProps> = ({
    arrowStroke = '#fff',
    ...rest
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={20}
            {...rest}
        >
            <path
                fill="transparent"
                fillRule="evenodd"
                stroke={arrowStroke}
                strokeWidth={2}
                d="m15 1 9 9-9 9M0 10h24"
            />
        </svg>
    )
}
export default ArrowIcon
