import FancyHero from '@/components/organisms/FancyHero'
import React from 'react'
import contactImageLg from 'public/assets/contact/desktop/image-hero.jpg'
import contactImageMd from 'public/assets/contact/tablet/image-hero.jpg'
import contactImageSm from 'public/assets/contact/mobile/image-hero.jpg'
import contactInfo from '../../../utils/contactInfo'
import Button from '@/components/atoms/Button'
import MapSection from '@/components/organisms/MapSection'
import CustomInput from '@/components/atoms/CustomInput'
import CustomTextArea from '@/components/atoms/CustomTextArea'
import ArrowIcon from '@/components/icons/ArrowIcon'
import ContactDetails from '@/components/organisms/ContactDetails'
import ContactForm from '@/components/organisms/ContactForm'

const Contact: React.FC = () => {
    return (
        <section className="max-w-screen-lg mx-auto space-y-[112px] md:space-y-[200px]">
            <FancyHero
                header="Contact"
                title="Tell us about your project"
                description="We'd love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
                images={{
                    lg: contactImageLg,
                    md: contactImageMd,
                    sm: contactImageSm,
                }}
            />
            <ContactDetails />
            <MapSection />
            <ContactForm />
        </section>
    )
}

export default Contact
