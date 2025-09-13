'use client'

import { useState } from 'react'
import { Heart, Bed, Bath, Maximize } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import HoomValueLogo from './HoomValueLogo'

export default function Properties() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      price: 'P8,500.00',
      name: 'Student Haven Dormitory',
      location: 'Nasipit, Talamban, Cebu City',
      beds: 3,
      baths: 2,
      area: '5x7 m²',
      popular: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=400&h=300&fit=crop',
      price: 'P7,200.00',
      name: 'Campus View Apartment',
      location: 'Colon Street, Cebu City, 6000',
      beds: 4,
      baths: 2,
      area: '6x7.5 m²',
      popular: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      price: 'P10,500.00',
      name: 'Modern Student Housing',
      location: 'Fatima Street, Duljo, Cebu City, 6000',
      beds: 4,
      baths: 3,
      area: '8x10 m²',
      popular: true
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Based on your location
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Some of our picked properties near you location.
          </p>
          <Link href="/rent" className="btn-outline">
            Browse more properties
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="card group">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                  <div className="absolute top-4 right-4">
                    <HoomValueLogo size="sm" />
                  </div>
                {property.popular && (
                  <div className="absolute bottom-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <span>⭐</span>
                    <span>POPULAR</span>
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    favorites.has(property.id)
                      ? 'bg-accent text-white'
                      : 'bg-white/90 text-gray-600 hover:bg-accent hover:text-white'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.has(property.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  {property.price} /month
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-1">
                  {property.name}
                </div>
                <div className="text-gray-600 mb-4">
                  {property.location}
                </div>
                <div className="flex space-x-6 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} Beds</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} Bathrooms</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Maximize className="h-4 w-4" />
                    <span>{property.area}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
