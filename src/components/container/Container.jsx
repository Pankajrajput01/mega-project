import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-full px-4 bf'>
        {children}
    </div>
  )
}

export default Container