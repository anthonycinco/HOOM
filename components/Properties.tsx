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
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      price: 8500,
      name: 'Student Haven Dormitory',
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
      image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      price: 10500,
      name: 'Modern Student Housing',
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
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
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
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-airbnb-dark mb-4">
            Explore student housing in Cebu
          </h2>
          <p className="text-airbnb-gray-300 text-lg">
            Discover verified properties perfect for students
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(property.id)
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                    favorites.has(property.id)
                      ? 'text-airbnb-red bg-white'
                      : 'text-white bg-black/20 hover:bg-black/40'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${favorites.has(property.id) ? 'fill-current' : ''}`} />
                </button>

                {/* Verified Badge */}
                <div className="absolute top-3 left-3">
                  <HoomValueLogo size="sm" />
                </div>

                {/* Property Type */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-airbnb-dark text-xs font-semibold px-2 py-1 rounded-full">
                    {property.type}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg font-semibold text-airbnb-dark">
                      ₱{property.price.toLocaleString()}
                    </span>
                    <span className="text-airbnb-gray-300">/month</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-airbnb-red fill-current" />
                    <span className="text-sm font-medium text-airbnb-dark">
                      {property.rating}
                    </span>
                    <span className="text-airbnb-gray-300 text-sm">
                      ({property.reviews})
                    </span>
                  </div>
                </div>

                {/* Property Name */}
                <h3 className="text-airbnb-dark font-medium mb-1 line-clamp-1">
                  {property.name}
                </h3>

                {/* Location */}
                <div className="flex items-center space-x-1 text-airbnb-gray-300 text-sm mb-2">
                  <MapPin className="h-3 w-3" />
                  <span className="line-clamp-1">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center space-x-4 text-airbnb-gray-300 text-sm">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <Link 
            href="/rent"
            className="inline-flex items-center px-6 py-3 border border-airbnb-dark text-airbnb-dark font-semibold rounded-lg hover:bg-airbnb-dark hover:text-white transition-all duration-200"
          >
            Show more
          </Link>
        </div>
      </div>
    </section>
  )
}