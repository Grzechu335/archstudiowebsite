import Button from '@/components/atoms/Button'
import React from 'react'
import contactInfo from '../../../../utils/contactInfo'

const ContactDetails: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-[42px]">
            <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] md:heading-md">
                Contact <br /> Details
            </h2>
            {contactInfo.map((office) => (
                <div
                    key={office.id}
                    className="grid md:grid-cols-2 lg:grid-cols-1"
                >
                    <div>
                        <h3 className="font-bold mb-[14px]">{office.name}</h3>
                        <p className="font-medium">
                            Mail:{' '}
                            <span className="ml-3 font-normal">
                                {office.mail}
                            </span>
                        </p>
                        <p className="font-medium">
                            Address:{' '}
                            <span className="ml-3 font-normal">
                                {office.address}
                            </span>
                        </p>
                        <p className="font-medium">
                            Phone:{' '}
                            <span className="ml-3 font-normal">
                                {office.phone}
                            </span>
                        </p>
                    </div>
                    <div className="grid place-content-start md:place-content-end lg:place-content-start">
                        <Button
                            className="px-0 text-black bg-white active:bg-white active:text-black hover:text-black hover:bg-white"
                            arrowStroke="#000"
                        >
                            View on Map
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactDetails
