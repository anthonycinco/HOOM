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
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Find your dream place to live in with more than 
              <span className="text-gradient"> 10k+ properties</span> listed.
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

          <div className="flex justify-center">
            <div className="relative w-96 h-96">
              {/* Background decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 relative">
                  {/* Main building */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-56 h-48 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl">
                    {/* Windows */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 rounded-lg shadow-lg"></div>
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-lg shadow-lg"></div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/90 rounded-lg shadow-lg"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/90 rounded-lg shadow-lg"></div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 rounded-lg shadow-lg"></div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/90 rounded-lg shadow-lg"></div>
                    {/* Door */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-primary-700 rounded-t-2xl"></div>
                  </div>
                  
                  {/* Roof */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[64px] border-l-transparent border-r-transparent border-b-primary-400 shadow-lg"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-300 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-200 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
