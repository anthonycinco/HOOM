interface HoomValueLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function HoomValueLogo({ className = '', size = 'md', showText = true }: HoomValueLogoProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <div className={`${sizeClasses[size]} flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center shadow-md`}>
        <svg className="w-3/4 h-3/4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      {showText && (
        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">VERIFIED</span>
      )}
    </div>
  )
}
