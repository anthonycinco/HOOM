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
  const [guests, setGuests] = useState('1 guest')

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
    if (activeTab === 'rent') {
      router.push('/rent')
    } else if (activeTab === 'buy') {
      router.push('/buy')
    } else if (activeTab === 'sell') {
      router.push('/sell')
    }
  }

  return (
    <section className="pt-16 pb-8 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-airbnb-dark mb-4">
              Find your perfect student home
            </h1>
            <p className="text-lg sm:text-xl text-airbnb-gray-300 max-w-2xl mx-auto">
              Discover verified dormitories and apartments in Cebu. Safe, affordable, and perfect for students.
            </p>
          </div>

          {/* Search Bar - Airbnb Style */}
          <div className="bg-white rounded-2xl shadow-lg border border-airbnb-gray-100 p-2 mb-8">
            <div className="flex flex-col lg:flex-row">
              {/* Tab Buttons */}
              <div className="flex rounded-xl bg-airbnb-gray-50 p-1 mb-4 lg:mb-0 lg:mr-4">
                {['rent', 'buy', 'sell'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 capitalize ${
                      activeTab === tab
                        ? 'bg-white text-airbnb-dark shadow-sm'
                        : 'text-airbnb-gray-300 hover:text-airbnb-dark'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search Inputs */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2">
                {/* Location */}
                <div className="relative">
                  <button className="w-full text-left p-4 border border-airbnb-gray-100 rounded-xl hover:border-airbnb-dark transition-colors">
                    <div className="text-sm font-semibold text-airbnb-dark mb-1">Where</div>
                    <div className="text-airbnb-gray-300 text-sm">{location}</div>
                  </button>
                  <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-airbnb-gray-300" />
                </div>

                {/* Check-in */}
                <div className="relative">
                  <button className="w-full text-left p-4 border border-airbnb-gray-100 rounded-xl hover:border-airbnb-dark transition-colors">
                    <div className="text-sm font-semibold text-airbnb-dark mb-1">Check-in</div>
                    <div className="text-airbnb-gray-300 text-sm">
                      {moveInDate || 'Add dates'}
                    </div>
                  </button>
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-airbnb-gray-300" />
                </div>

                {/* Check-out */}
                <div className="relative">
                  <button className="w-full text-left p-4 border border-airbnb-gray-100 rounded-xl hover:border-airbnb-dark transition-colors">
                    <div className="text-sm font-semibold text-airbnb-dark mb-1">Check-out</div>
                    <div className="text-airbnb-gray-300 text-sm">Add dates</div>
                  </button>
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-airbnb-gray-300" />
                </div>

                {/* Guests */}
                <div className="relative md:col-span-1">
                  <button className="w-full text-left p-4 border border-airbnb-gray-100 rounded-xl hover:border-airbnb-dark transition-colors">
                    <div className="text-sm font-semibold text-airbnb-dark mb-1">Who</div>
                    <div className="text-airbnb-gray-300 text-sm">{guests}</div>
                  </button>
                  <Users className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-airbnb-gray-300" />
                </div>

                {/* Search Button */}
                <div className="md:col-span-2">
                  <button
                    onClick={handleSearch}
                    className="w-full bg-airbnb-red text-white p-4 rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Search className="h-4 w-4" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="flex items-center space-x-2 px-4 py-2 border border-airbnb-gray-100 rounded-full hover:border-airbnb-dark transition-colors">
              <span className="text-2xl">🏠</span>
              <span className="text-sm font-medium">Entire place</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-airbnb-gray-100 rounded-full hover:border-airbnb-dark transition-colors">
              <span className="text-2xl">🏢</span>
              <span className="text-sm font-medium">Dormitory</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-airbnb-gray-100 rounded-full hover:border-airbnb-dark transition-colors">
              <span className="text-2xl">🏘️</span>
              <span className="text-sm font-medium">Apartment</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-airbnb-gray-100 rounded-full hover:border-airbnb-dark transition-colors">
              <span className="text-2xl">💰</span>
              <span className="text-sm font-medium">Under P10,000</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-airbnb-gray-100 rounded-full hover:border-airbnb-dark transition-colors">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-medium">Top rated</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-airbnb-dark">50k+</div>
              <div className="text-airbnb-gray-300 text-sm">Students</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-airbnb-dark">10k+</div>
              <div className="text-airbnb-gray-300 text-sm">Properties</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-airbnb-dark">100+</div>
              <div className="text-airbnb-gray-300 text-sm">Cities</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-airbnb-dark">4.9</div>
              <div className="text-airbnb-gray-300 text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}