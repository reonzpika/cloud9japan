import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

export function Button({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 font-medium text-lg rounded-md transition-all duration-300",
        variant === 'primary' && "bg-artisan-gold hover:bg-artisan-gold/90 text-white shadow-lg hover:shadow-xl active:scale-95",
        variant === 'secondary' && "bg-indigo hover:bg-indigo-dark text-white active:scale-95",
        variant === 'outline' && "border-2 border-indigo text-indigo hover:bg-indigo hover:text-kinari",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
