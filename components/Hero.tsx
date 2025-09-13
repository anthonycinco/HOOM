'use client'

import { useState } from 'react'
import { MapPin, Calendar, Users, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import HoomValueLogo from './HoomValueLogo'

export default function Hero() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('rent')
  const [location, setLocation] = useState('Cebu City, Cebu')
  const [moveInDate, setMoveInDate] = useState('')
  const [guests, setGuests] = useState('1')
  const [showGuestMenu, setShowGuestMenu] = useState(false)

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
    // Add search parameters to the URL
    const searchParams = new URLSearchParams()
    searchParams.set('location', location)
    searchParams.set('moveInDate', moveInDate)
    searchParams.set('guests', guests)
    
    if (activeTab === 'rent') {
      router.push(`/rent?${searchParams.toString()}`)
    } else if (activeTab === 'buy') {
      router.push(`/buy?${searchParams.toString()}`)
    } else if (activeTab === 'sell') {
      router.push(`/sell?${searchParams.toString()}`)
    }
  }

  return (
    <section className="pt-16 pb-12 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-primary-200 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-300 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Trusted by 50,000+ students
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-airbnb-dark mb-6 leading-tight">
              Find your perfect
              <span className="text-gradient block">student home</span>
            </h1>
            <p className="text-xl sm:text-2xl text-airbnb-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover verified dormitories and apartments in Cebu. Safe, affordable, and perfect for students.
            </p>
          </div>

          {/* Search Bar - Enhanced Design */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-3 mb-12 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row">
              {/* Tab Buttons */}
              <div className="flex rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 p-1 mb-4 lg:mb-0 lg:mr-4">
                {['rent', 'buy', 'sell'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? 'bg-white text-primary-600 shadow-lg transform scale-105'
                        : 'text-primary-400 hover:text-primary-600 hover:bg-white/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search Inputs */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Location */}
                <div className="relative group">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-left p-5 border-2 border-gray-200 rounded-2xl hover:border-primary-300 focus:border-primary-500 focus:outline-none transition-all duration-300 group-hover:shadow-md"
                    placeholder="Enter location"
                  />
                  <div className="absolute left-5 top-2 text-sm font-semibold text-airbnb-dark">Where</div>
                  <MapPin className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-400 group-hover:text-primary-500 transition-colors" />
                </div>

                {/* Check-in */}
                <div className="relative group">
                  <input
                    type="date"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    className="w-full text-left p-5 border-2 border-gray-200 rounded-2xl hover:border-primary-300 focus:border-primary-500 focus:outline-none transition-all duration-300 group-hover:shadow-md"
                  />
                  <div className="absolute left-5 top-2 text-sm font-semibold text-airbnb-dark">Check-in</div>
                  <Calendar className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-400 group-hover:text-primary-500 transition-colors" />
                </div>

                {/* Check-out */}
                <div className="relative group">
                  <input
                    type="date"
                    className="w-full text-left p-5 border-2 border-gray-200 rounded-2xl hover:border-primary-300 focus:border-primary-500 focus:outline-none transition-all duration-300 group-hover:shadow-md"
                  />
                  <div className="absolute left-5 top-2 text-sm font-semibold text-airbnb-dark">Check-out</div>
                  <Calendar className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-400 group-hover:text-primary-500 transition-colors" />
                </div>

                {/* Guests */}
                <div className="relative group md:col-span-1">
                  <button 
                    onClick={() => setShowGuestMenu(!showGuestMenu)}
                    className="w-full text-left p-5 border-2 border-gray-200 rounded-2xl hover:border-primary-300 transition-all duration-300 group-hover:shadow-md"
                  >
                    <div className="text-sm font-semibold text-airbnb-dark mb-1">Who</div>
                    <div className="text-airbnb-gray-300 text-sm">{guests} guest{guests !== '1' ? 's' : ''}</div>
                  </button>
                  <Users className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-400 group-hover:text-primary-500 transition-colors" />
                  
                  {showGuestMenu && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-10 p-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Guests</span>
                          <div className="flex items-center space-x-3">
                            <button 
                              onClick={() => setGuests(Math.max(1, parseInt(guests) - 1).toString())}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-500"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">{guests}</span>
                            <button 
                              onClick={() => setGuests((parseInt(guests) + 1).toString())}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-500"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <div className="md:col-span-2">
                  <button
                    onClick={handleSearch}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white p-5 rounded-2xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Search className="h-5 w-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button className="flex items-center space-x-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-2xl">🏠</span>
              <span className="text-sm font-semibold">Entire place</span>
            </button>
            <button className="flex items-center space-x-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-2xl">🏢</span>
              <span className="text-sm font-semibold">Dormitory</span>
            </button>
            <button className="flex items-center space-x-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-2xl">🏘️</span>
              <span className="text-sm font-semibold">Apartment</span>
            </button>
            <button className="flex items-center space-x-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-2xl">💰</span>
              <span className="text-sm font-semibold">Under P10,000</span>
            </button>
            <button className="flex items-center space-x-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm hover:shadow-md">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-semibold">Top rated</span>
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">50k+</div>
              <div className="text-airbnb-gray-300 text-sm font-medium">Students</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">10k+</div>
              <div className="text-airbnb-gray-300 text-sm font-medium">Properties</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-airbnb-gray-300 text-sm font-medium">Cities</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="text-airbnb-gray-300 text-sm font-medium">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}