'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { value: 'en' as const, label: 'English', flag: '🇺🇸' },
    { value: 'fil' as const, label: 'Filipino', flag: '🇵🇭' },
    { value: 'ko' as const, label: '한국어', flag: '🇰🇷' },
    { value: 'ja' as const, label: '日本語', flag: '🇯🇵' },
    { value: 'zh' as const, label: '中文', flag: '🇨🇳' }
  ]

  const currentLanguage = languages.find(l => l.value === language) || languages[0]

  return (
    <div className="relative">
      <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
        {languages.map((lang) => {
          const isActive = language === lang.value
          
          return (
            <button
              key={lang.value}
              onClick={() => setLanguage(lang.value)}
              className={`flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label={`${t('a11y.toggleLanguage')} - ${lang.label}`}
              title={`Switch to ${lang.label}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="hidden md:inline text-xs sm:text-sm">{lang.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
