import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'white',
    className = '',
    ...props

}) {
  return (
    <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${bgColor} text-${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button