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
      <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg className="w-3/4 h-3/4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      </div>
    </div>
  )
}
