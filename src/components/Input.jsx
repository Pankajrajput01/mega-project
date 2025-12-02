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
            className='inline-block mb-2.5 text-slate-700 font-semibold text-sm' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-4 py-2.5 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent duration-200 border border-blue-200 shadow-sm w-full placeholder:text-slate-400 font-medium transition-all ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})


export default Input