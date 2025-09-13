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
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="hoomValueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B68EE" />
              <stop offset="100%" stopColor="#5A4FCF" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#hoomValueGradient)" />
          <path
            d="M25 50 L40 35 L55 50 L55 65 L25 65 Z"
            fill="white"
          />
          <rect x="35" y="55" width="8" height="8" fill="url(#hoomValueGradient)" />
          <rect x="47" y="55" width="8" height="8" fill="url(#hoomValueGradient)" />
          <path
            d="M70 30 L85 30 L85 45 L70 45 Z"
            fill="white"
          />
          <path
            d="M70 50 L85 50 L85 65 L70 65 Z"
            fill="white"
          />
          <path
            d="M70 70 L85 70 L85 85 L70 85 Z"
            fill="white"
          />
        </svg>
      </div>
      {showText && (
        <span className="text-xs font-semibold text-primary-500">hoomvalue CHECKED</span>
      )}
    </div>
  )
}
