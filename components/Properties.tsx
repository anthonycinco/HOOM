'use client'

import { useState } from 'react'
import { Heart, Star, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import HoomValueLogo from './HoomValueLogo'

export default function Properties() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop&q=80',
      price: 8500,
      name: 'Modern Student Haven',
      location: 'Nasipit, Talamban, Cebu City',
      rating: 4.8,
      reviews: 124,
      beds: 3,
      baths: 2,
      area: '5x7 m²',
      popular: true,
      type: 'Dormitory'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop&q=80',
      price: 7200,
      name: 'Campus View Apartment',
      location: 'Colon Street, Cebu City',
      rating: 4.9,
      reviews: 89,
      beds: 4,
      baths: 2,
      area: '6x7.5 m²',
      popular: true,
      type: 'Apartment'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop&q=80',
      price: 10500,
      name: 'Luxury Student Housing',
      location: 'Fatima Street, Duljo, Cebu City',
      rating: 4.7,
      reviews: 156,
      beds: 4,
      baths: 3,
      area: '8x10 m²',
      popular: true,
      type: 'Student Housing'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop&q=80',
      price: 6800,
      name: 'Cozy Studio Apartment',
      location: 'Lahug, Cebu City',
      rating: 4.6,
      reviews: 67,
      beds: 2,
      baths: 1,
      area: '4x5 m²',
      popular: false,
      type: 'Studio'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop&q=80',
      price: 9200,
      name: 'University Heights',
      location: 'IT Park, Cebu City',
      rating: 4.9,
      reviews: 203,
      beds: 3,
      baths: 2,
      area: '6x8 m²',
      popular: true,
      type: 'Apartment'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=500&h=400&fit=crop&q=80',
      price: 5800,
      name: 'Budget Friendly Dorm',
      location: 'Banilad, Cebu City',
      rating: 4.4,
      reviews: 45,
      beds: 2,
      baths: 1,
      area: '3x4 m²',
      popular: false,
      type: 'Dormitory'
    }
  ]

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Featured Properties
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-airbnb-dark mb-6">
            Explore student housing in Cebu
          </h2>
          <p className="text-airbnb-gray-300 text-xl max-w-2xl mx-auto">
            Discover verified properties perfect for students with modern amenities and great locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="relative">
                <div className="aspect-square rounded-t-3xl overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(property.id)
                  }}
                  className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 shadow-lg ${
                    favorites.has(property.id)
                      ? 'text-primary-600 bg-white scale-110'
                      : 'text-white bg-black/30 hover:bg-black/50 hover:scale-110'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.has(property.id) ? 'fill-current' : ''}`} />
                </button>

                {/* Verified Badge */}
                <div className="absolute top-4 left-4">
                  <HoomValueLogo size="sm" />
                </div>

                {/* Property Type */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-primary-600 text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                    {property.type}
                  </span>
                </div>

                {/* Popular Badge */}
                {property.popular && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Popular
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl font-bold text-primary-600">
                      ₱{property.price.toLocaleString()}
                    </span>
                    <span className="text-airbnb-gray-300 font-medium">/month</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-primary-50 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-primary-600 fill-current" />
                    <span className="text-sm font-bold text-primary-600">
                      {property.rating}
                    </span>
                    <span className="text-airbnb-gray-300 text-sm">
                      ({property.reviews})
                    </span>
                  </div>
                </div>

                {/* Property Name */}
                <h3 className="text-airbnb-dark font-bold text-lg mb-3 line-clamp-1">
                  {property.name}
                </h3>

                {/* Location */}
                <div className="flex items-center space-x-2 text-airbnb-gray-300 text-sm mb-4">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span className="line-clamp-1">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-airbnb-gray-300 text-sm bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">{property.beds}</span>
                    <span>beds</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">{property.baths}</span>
                    <span>baths</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-16">
          <Link 
            href="/rent"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Explore All Properties</span>
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}