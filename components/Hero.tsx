'use client'

import { useState } from 'react'
import { MapPin, Calendar, Users, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import HoomValueLogo from './HoomValueLogo'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const router = useRouter()
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('rent')
  const [location, setLocation] = useState('Cebu City, Cebu')
  const [moveInDate, setMoveInDate] = useState('')
  const [moveOutDate, setMoveOutDate] = useState('')
  const [guests, setGuests] = useState('1')
  const [showGuestMenu, setShowGuestMenu] = useState(false)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === 'buy') {
      setLocation('Enter city or neighborhood')
      setMoveInDate('')
      setMoveOutDate('')
      setGuests('1')
    } else if (tab === 'sell') {
      setLocation('Enter property address')
      setMoveInDate('')
      setMoveOutDate('')
      setGuests('1')
    } else {
      setLocation('Cebu City, Cebu')
      setMoveInDate('')
      setMoveOutDate('')
      setGuests('1')
    }
  }


  const handleSearch = () => {
    // Add search parameters to the URL
    const searchParams = new URLSearchParams()
    searchParams.set('location', location)
    searchParams.set('moveInDate', moveInDate)
    searchParams.set('moveOutDate', moveOutDate)
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
    <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-primary-200 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-300 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Trusted by 50,000+ students
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-airbnb-dark mb-8 leading-tight">
              {t('hero.title')}
              <span className="text-gradient block">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-airbnb-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Search Bar - Redesigned */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 mb-16 backdrop-blur-sm">
            {/* Tab Buttons */}
            <div className="flex rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 p-1 mb-6">
              {['rent', 'buy', 'sell'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`flex-1 py-4 px-8 rounded-xl font-semibold text-sm transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? 'bg-white text-primary-600 shadow-lg transform scale-105'
                      : 'text-primary-400 hover:text-primary-600 hover:bg-white/50'
                  }`}
                >
                  {t(`nav.${tab}`)}
                </button>
              ))}
            </div>

            {/* Search Form */}
            <div className={`grid gap-4 ${activeTab === 'rent' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
              {/* Location */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Where</label>
                <div className="relative">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-4 pr-12 border-2 border-gray-200 rounded-xl hover:border-primary-300 focus:border-primary-500 focus:outline-none transition-all duration-300"
                    placeholder={t('hero.searchPlaceholder')}
                  />
                  <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Only show these fields for rent tab */}
              {activeTab === 'rent' && (
                <>
                  {/* Check-in */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={moveInDate}
                        onChange={(e) => setMoveInDate(e.target.value)}
                        className="w-full p-4 pr-12 border-2 border-gray-200 rounded-xl hover:border-primary-300 focus:border-primary-500 focus:outline-none transition-all duration-300"
                      />
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Check-out</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={moveOutDate}
                        onChange={(e) => setMoveOutDate(e.target.value)}
                        className="w-full p-4 pr-12 border-2 border-gray-200 rounded-xl hover:border-primary-300 focus:border-primary-500 focus:outline-none transition-all duration-300"
                      />
                      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
                    <div className="relative">
                      <button 
                        onClick={() => setShowGuestMenu(!showGuestMenu)}
                        className="w-full p-4 pr-12 border-2 border-gray-200 rounded-xl hover:border-primary-300 focus:border-primary-500 focus:outline-none transition-all duration-300 text-left"
                      >
                        {guests} guest{guests !== '1' ? 's' : ''}
                      </button>
                      <Users className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      
                      {showGuestMenu && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-10 p-4">
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
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Search Button */}
            <div className="mt-6">
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Search className="h-5 w-5" />
                <span>{t('hero.searchButton')}</span>
              </button>
            </div>
          </div>


          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">50k+</div>
              <div className="text-airbnb-gray-300 text-sm font-medium">{t('hero.students')}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">10k+</div>
              <div className="text-airbnb-gray-300 text-sm font-medium">{t('hero.properties')}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-airbnb-gray-300 text-sm font-medium">{t('hero.cities')}</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="text-airbnb-gray-300 text-sm font-medium">{t('hero.rating')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}