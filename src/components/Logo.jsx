import React from 'react'

function Logo({ width = 40 }) {
  return (
    <svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="var(--primary)"></rect>
      <path d="M7 12h10" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M7 8h10" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity={0.85}></path>
    </svg>
  )
}

export default Logo