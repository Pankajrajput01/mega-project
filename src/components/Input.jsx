import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-2 text-[var(--muted)] font-medium' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-4 py-3 rounded-md bg-[var(--card)] text-[var(--text)] outline-none focus:ring-2 focus:ring-[var(--primary)] duration-200 border border-transparent shadow-sm w-full placeholder:text-[var(--muted)] ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})


export default Input