import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'popular' | 'heritage'
  children: React.ReactNode
}

export function Badge({ 
  variant = 'default', 
  className, 
  children, 
  ...props 
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-4 py-2 text-sm font-bold rounded-full",
        variant === 'default' && "bg-kinari-light border-2 border-indigo text-indigo",
        variant === 'popular' && "bg-indigo text-white",
        variant === 'heritage' && "bg-artisan-gold text-white",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
