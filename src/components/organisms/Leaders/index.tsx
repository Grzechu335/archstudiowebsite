import Image from 'next/image'
import React from 'react'
import leaders from '../../../../utils/leaders'

const Leaders: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-[30px]">
            <div>
                <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] md:heading-md">
                    The <br /> Leaders
                </h2>
            </div>
            <div className="grid md:grid-cols-2 col-span-2 gap-[80px] md:gap-x-[11px] md:gap-y-[100px] lg:gap-[30px]">
                {leaders.map((leader) => (
                    <div
                        key={leader.id}
                        className="space-y-[15px] mx-auto"
                    >
                        <Image
                            src={leader.image}
                            alt={`${leader.name} image`}
                        />
                        <div>
                            <p className="text-black heading-sm">
                                {leader.name}
                            </p>
                            <p>{leader.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaders
