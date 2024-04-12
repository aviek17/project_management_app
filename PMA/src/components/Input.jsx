import React, { forwardRef } from 'react'

const Input = forwardRef(({ isTextArea, label, ...props }, ref) => {
    const classes = 'w-full p-1 border-b-2 bg-stone-200 border-stone-300 rounded-sm text-stone-600 focus:outline-none focus:border-stone-600';
    return (
        <p className='flex flex-col gap-1 my-4'>
            <label className='text-sm font-bold text-stone-500 uppercase'>{label}</label>
            {
                isTextArea ?
                    (
                        <textarea ref={ref} {...props} className={classes} />
                    )
                    :
                    (
                        <input ref={ref} className={classes} {...props} />
                    )
            }
        </p>
    )
})

export default Input;
