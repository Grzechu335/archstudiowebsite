'use client'
import CustomInput from '@/components/atoms/CustomInput'
import CustomTextArea from '@/components/atoms/CustomTextArea'
import ArrowIcon from '@/components/icons/ArrowIcon'
import React from 'react'
import { useForm } from 'react-hook-form'
import emailRegExp from '../../../../utils/emailRegExp'
import { useRouter } from 'next/navigation'

type FormData = {
    name: string
    email: string
    message: string
}

const ContactForm: React.FC = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>()
    const onSubmit = handleSubmit((data) => {
        alert(`Thank you for your trust! 
        Your message looks like this:
        Name: ${data.name},
        Email: ${data.email},
        Message: ${data.message}        
        `)
        reset()
        router.push('/')
    })
    return (
        <div className="grid pb-10 md:pb-0 lg:grid-cols-3 gap-[60px]">
            <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.2px] md:heading-md">
                Connect with us
            </h2>
            <form
                noValidate
                onSubmit={onSubmit}
                className="space-y-6 lg:col-span-2"
            >
                <CustomInput
                    {...register('name', {
                        required: { message: "Can't be empty", value: true },
                    })}
                    error={errors.name}
                    placeholder="Name"
                />
                <CustomInput
                    {...register('email', {
                        required: { message: "Can't be empty", value: true },
                        pattern: {
                            value: emailRegExp,
                            message: 'Wrong address email',
                        },
                    })}
                    error={errors.email}
                    placeholder="Email"
                />
                <div className="relative">
                    <CustomTextArea
                        {...register('message', {
                            required: {
                                message: "Can't be empty",
                                value: true,
                            },
                        })}
                        error={errors.message}
                        placeholder="Message"
                    />
                    <button
                        type="submit"
                        className="absolute right-0 grid place-content-center  transition-colors duration-200 hover:bg-dark-gray group  -bottom-[60px] md:-bottom-[80px] w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-black"
                    >
                        <ArrowIcon className="transition-all duration-200 group-hover:scale-125" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
