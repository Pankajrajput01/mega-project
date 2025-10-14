import React from 'react'

function Button({
    children,
    type = 'button',
    bgClass = 'bg-[var(--primary)]',
    textClass = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button type={type} className={`px-5 py-2.5 rounded-md font-semibold transition-all duration-150 shadow-sm ${bgClass} ${textClass} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button