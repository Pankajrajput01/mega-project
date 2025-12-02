import React from 'react'

function Button({
    children,
    type = 'button',
    bgClass = 'bg-blue-600 hover:bg-blue-700',
    textClass = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button 
      type={type} 
      className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:shadow-sm active:scale-95 ${bgClass} ${textClass} ${className}`} 
      {...props}>
        {children}
    </button>
  )
}

export default Button