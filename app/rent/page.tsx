import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Search, MapPin, Calendar, Filter, Star, Heart, Bed, Bath, Maximize } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import HoomValueLogo from '@/components/HoomValueLogo'

export default function RentPage() {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
      price: 'P8,500',
      name: 'Orion\'s Homestay',
      location: 'Nasipit, Talamban, Cebu City',
      beds: 3,
      baths: 2,
      area: '5x7 m²',
      rating: 4.8,
      popular: true,
      type: 'Dormitory'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
      price: 'P7,200',
      name: 'Golden Pad',
      location: 'Colon Street, Cebu City',
      beds: 4,
      baths: 2,
      area: '6x7.5 m²',
      rating: 4.6,
      popular: true,
      type: 'Apartment'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop',
      price: 'P10,500',
      name: 'Homenest',
      location: 'Fatima Street, Duljo, Cebu City',
      beds: 4,
      baths: 3,
      area: '8x10 m²',
      rating: 4.9,
      popular: true,
      type: 'Condominium'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
      price: 'P6,800',
      name: 'Student Haven',
      location: 'Lahug, Cebu City',
      beds: 2,
      baths: 1,
      area: '4x6 m²',
      rating: 4.5,
      popular: false,
      type: 'Dormitory'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=500&h=300&fit=crop',
      price: 'P9,200',
      name: 'Campus View',
      location: 'Banilad, Cebu City',
      beds: 3,
      baths: 2,
      area: '7x8 m²',
      rating: 4.7,
      popular: false,
      type: 'Apartment'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
      price: 'P12,000',
      name: 'Modern Dorm',
      location: 'IT Park, Cebu City',
      beds: 4,
      baths: 3,
      area: '9x11 m²',
      rating: 4.9,
      popular: true,
      type: 'Dormitory'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Rent Student Housing</h1>
            <p className="text-xl text-gray-600">Find your perfect dormitory or apartment in Cebu</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter location (e.g., Talamban, Lahug, IT Park)"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Move-in date"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <button className="btn-outline flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </button>
                <Link href="/rent" className="btn-primary flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <Star className="h-3 w-3" />
                      <span>POPULAR</span>
                    </div>
                  )}
                  <button className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 text-gray-600 hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-300">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-2xl font-bold text-primary-500">
                      {property.price}/month
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span>{property.rating}</span>
                    </div>
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-1">
                    {property.name}
                  </div>
                  <div className="text-gray-600 mb-2">
                    {property.location}
                  </div>
                  <div className="text-sm text-primary-500 font-medium mb-4">
                    {property.type}
                  </div>
                  <div className="flex space-x-6 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.beds} Beds</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.baths} Baths</span>
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
      </div>

      <Footer />
    </main>
  )
}
