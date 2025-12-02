import React , {useId} from 'react'

function Select({
  options,
  label,
  className,
  ...props
}, ref) {  
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='block mb-2.5 text-slate-700 font-semibold text-sm'>{label}</label>}
      <select 
      {...props} 
      id={id}
      ref={ref}
      className={`px-4 py-2.5 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent duration-200 border border-blue-200 w-full font-medium transition-all cursor-pointer ${className}`}
      >
        {options?.map((option)=>(
          <option key={option} value={option} className='py-2'>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)