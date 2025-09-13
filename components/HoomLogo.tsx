interface HoomLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function HoomLogo({ className = '', size = 'md' }: HoomLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="hoomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B68EE" />
            <stop offset="100%" stopColor="#5A4FCF" />
          </linearGradient>
        </defs>
        <path
          d="M50 10 C70 10, 90 30, 90 50 C90 70, 70 90, 50 90 C30 90, 10 70, 10 50 C10 30, 30 10, 50 10 Z"
          fill="url(#hoomGradient)"
        />
        <path
          d="M30 60 L50 40 L70 60 L70 80 L30 80 Z"
          fill="white"
        />
        <rect x="40" y="65" width="6" height="6" fill="url(#hoomGradient)" />
        <rect x="54" y="65" width="6" height="6" fill="url(#hoomGradient)" />
      </svg>
    </div>
  )
}
