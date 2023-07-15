import clsx from 'clsx'
import React from 'react'
import { FieldError } from 'react-hook-form'

type CustomTextAreaProps = {
    placeholder?: string
    error?: FieldError
}

const CustomTextArea = React.forwardRef<
    HTMLTextAreaElement,
    CustomTextAreaProps
>((props, ref) => {
    const { placeholder, error, ...rest } = props
    return (
        <label
            className={clsx(
                'flex flex-col pt-2 pb-4 h-[100px] px-4 border-b-[1px] relative focus-within:border-b-[3px]',
                {
                    ' text-red border-b-red border-b-[3px] placeholder-': error,
                }
            )}
        >
            {error ? (
                <span className="absolute right-4  transform top-1/2 translate-y-[-50%] font-bold">
                    {error?.message}
                </span>
            ) : null}
            <textarea
                {...rest}
                placeholder={placeholder}
                ref={ref}
                className={clsx(
                    'font-bold outline-none h-full resize-none placeholder-text-light-gray placeholder:font-bold',
                    {
                        'placeholder-red': error,
                    }
                )}
            />
        </label>
    )
})

CustomTextArea.displayName = 'CustomTextArea'

export default CustomTextArea
