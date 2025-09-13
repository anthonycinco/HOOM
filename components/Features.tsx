'use client'

import { Building, TrendingUp, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Features() {
  const { t } = useLanguage()
  
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '2-5%',
      label: t('features.commission')
    },
    {
      icon: <Building className="h-8 w-8" />,
      value: '3,856',
      label: t('features.propertyCount')
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: '~1,000',
      label: t('features.transactions')
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {t('features.title')}
              <span className="text-gradient">{t('features.titleHighlight')}</span>
              {t('features.titleEnd')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary-600 mb-3">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
