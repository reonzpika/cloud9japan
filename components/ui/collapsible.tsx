'use client'

import { ReactNode } from 'react'

interface CollapsibleProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

export function Collapsible({ title, children, defaultOpen = false, className = '' }: CollapsibleProps) {
  return (
    <details className={`group ${className}`} open={defaultOpen}>
      <summary className="flex items-center justify-between cursor-pointer list-none py-4 px-6 bg-white rounded-lg border-2 border-indigo-light hover:border-indigo transition-all duration-300">
        <span className="font-semibold text-lg text-indigo">{title}</span>
        <svg 
          className="w-5 h-5 text-indigo transition-transform duration-300 group-open:rotate-180" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="mt-4 px-6 py-4 bg-white rounded-lg border-2 border-indigo-light">
        {children}
      </div>
    </details>
  )
}
