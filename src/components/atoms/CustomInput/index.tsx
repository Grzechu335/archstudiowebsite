import clsx from 'clsx'
import React, { HTMLInputTypeAttribute } from 'react'
import { FieldError } from 'react-hook-form'

type CustomInputProps = {
    placeholder?: string
    error?: FieldError
    type?: HTMLInputTypeAttribute
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    (props, ref) => {
        const { placeholder, error, type = 'text', ...rest } = props
        return (
            <label
                className={clsx(
                    'flex flex-col pt-2 flex-shrink pb-4 px-4 border-b-[1px] relative focus-within:border-b-[3px]',
                    {
                        ' text-red border-b-red border-b-[3px] placeholder-':
                            error,
                    }
                )}
            >
                {error ? (
                    <span className="absolute right-4 transform top-1/2 translate-y-[-50%] font-bold">
                        {error?.message}
                    </span>
                ) : null}
                <input
                    {...rest}
                    placeholder={placeholder}
                    type={type}
                    ref={ref}
                    className={clsx(
                        'font-bold outline-none placeholder-text-light-gray placeholder:font-bold',
                        {
                            'placeholder-red': error,
                        }
                    )}
                />
            </label>
        )
    }
)

CustomInput.displayName = 'CustomInput'

export default CustomInput
