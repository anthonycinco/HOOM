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
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-xs">h</span>
      </div>
    </div>
  )
}
