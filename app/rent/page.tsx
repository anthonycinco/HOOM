import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Search, Filter, Star, Heart, MapPin, Wifi, Car, Coffee, Dumbbell, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import HoomValueLogo from '@/components/HoomValueLogo'

export default function RentPage() {
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
      type: 'Dormitory',
      amenities: ['WiFi', 'Parking', 'Study Room', 'Gym', 'Security']
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
      type: 'Apartment',
      amenities: ['WiFi', 'Parking', 'Kitchen', 'Balcony']
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
      type: 'Student Housing',
      amenities: ['WiFi', 'Parking', 'Gym', 'Pool', 'Security', 'Study Room']
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
      type: 'Studio',
      amenities: ['WiFi', 'Kitchen', 'Balcony']
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
      type: 'Apartment',
      amenities: ['WiFi', 'Parking', 'Gym', 'Security', 'Study Room']
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
      type: 'Dormitory',
      amenities: ['WiFi', 'Study Room']
    }
  ]

  const amenities = [
    { name: 'WiFi', icon: Wifi },
    { name: 'Parking', icon: Car },
    { name: 'Kitchen', icon: Coffee },
    { name: 'Gym', icon: Dumbbell },
    { name: 'Security', icon: Shield }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-16">
        {/* Search Bar */}
        <div className="bg-white border-b border-airbnb-gray-100 sticky top-16 z-40">
          <div className="container-custom py-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <div className="flex items-center border border-airbnb-gray-100 rounded-lg px-4 py-3 hover:border-airbnb-dark transition-colors">
                  <Search className="h-5 w-5 text-airbnb-gray-300 mr-3" />
                  <input
                    type="text"
                    placeholder="Search by location, property type, or amenities"
                    className="flex-1 outline-none text-airbnb-dark placeholder-airbnb-gray-300"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-3 border border-airbnb-gray-100 rounded-lg hover:border-airbnb-dark transition-colors">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">Filters</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-3 border border-airbnb-gray-100 rounded-lg hover:border-airbnb-dark transition-colors">
                  <span className="text-sm font-medium">Price range</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-3 border border-airbnb-gray-100 rounded-lg hover:border-airbnb-dark transition-colors">
                  <span className="text-sm font-medium">Property type</span>
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {amenities.map((amenity) => (
                <button
                  key={amenity.name}
                  className="flex items-center space-x-2 px-3 py-2 border border-airbnb-gray-100 rounded-full hover:border-airbnb-dark transition-colors"
                >
                  <amenity.icon className="h-4 w-4" />
                  <span className="text-sm">{amenity.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="container-custom py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-airbnb-dark">
              {properties.length} properties in Cebu
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-airbnb-gray-300">Sort by:</span>
              <select className="border border-airbnb-gray-100 rounded-lg px-3 py-2 text-sm">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
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
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-airbnb-dark" />
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

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {property.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="text-xs text-airbnb-gray-300 bg-airbnb-gray-50 px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="text-xs text-airbnb-gray-300">
                        +{property.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-airbnb-dark text-airbnb-dark font-semibold rounded-lg hover:bg-airbnb-dark hover:text-white transition-all duration-200">
              Show more
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}