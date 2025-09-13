'use client'

import { Building, TrendingUp, CheckCircle } from 'lucide-react'

export default function Features() {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: '2-5%',
      label: 'On-Sale/Rent Commission'
    },
    {
      icon: <Building className="h-8 w-8" />,
      value: '3,856',
      label: 'Property in Sell & Rent'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: '~1,000',
      label: 'Daily Transactions'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Find your dream place to live in with more than 10k+ properties listed.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[48px] border-l-transparent border-r-transparent border-b-primary-500"></div>
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-primary-300 rounded-b-lg">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white border-2 border-primary-500 rounded"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-primary-600 rounded-t"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
