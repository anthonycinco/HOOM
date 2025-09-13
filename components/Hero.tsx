'use client'

import { useState } from 'react'
import { MapPin, Calendar, Search } from 'lucide-react'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('rent')
  const [location, setLocation] = useState('Cebu City, Cebu')
  const [moveInDate, setMoveInDate] = useState('')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === 'buy') {
      setLocation('Enter city or neighborhood')
    } else if (tab === 'sell') {
      setLocation('Enter property address')
    } else {
      setLocation('Cebu City, Cebu')
    }
  }

  const handleSearch = () => {
    console.log('Searching for:', { activeTab, location, moveInDate })
  }

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find Your Dream Dormitory—<br />
              <span className="text-gradient">Effortlessly!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Browse verified listings for students, with no hidden fees. Your perfect space in Cebu is just a click away.
            </p>

            <div className="flex items-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500">50k+</div>
                <div className="text-gray-600 font-medium">renters</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500">10k+</div>
                <div className="text-gray-600 font-medium">properties</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex space-x-2 mb-6">
                {['rent', 'buy', 'sell'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter location"
                  />
                </div>
                <div className="flex-1 relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Select Move-in Date"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="btn-primary flex items-center space-x-2 whitespace-nowrap"
                >
                  <Search className="h-5 w-5" />
                  <span>Browse Properties</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 lg:h-[500px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
              <div className="absolute top-8 left-8 w-72 bg-white rounded-xl shadow-xl overflow-hidden animate-float">
                <div className="relative h-40 bg-gray-300">
                  <div className="absolute top-2 right-2 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    hoomvalue CHECKED
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xl font-bold text-primary-500 mb-2">P13,500 /month</div>
                  <div className="font-semibold text-gray-900 mb-1">Unit 2 Calyx Residences</div>
                  <div className="text-gray-600 text-sm mb-3">Cebu City, Cebu</div>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>🛏️ 1</span>
                    <span>🚿 1</span>
                    <span>📐 2x5 m²</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 w-64 bg-white rounded-xl shadow-xl overflow-hidden animate-float" style={{ animationDelay: '1s' }}>
                <div className="relative h-32 bg-gray-300">
                  <div className="absolute top-2 right-2 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    hoom
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-lg font-bold text-primary-500 mb-2">P7,500 /month</div>
                  <div className="font-semibold text-gray-900 mb-1">Mark's Condo</div>
                  <div className="text-gray-600 text-sm mb-3">Cebu City, Cebu</div>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>🛏️ 2</span>
                    <span>🚿 1</span>
                    <span>📐 3x6m²</span>
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
