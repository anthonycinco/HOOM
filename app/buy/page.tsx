import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Search, MapPin, Home, DollarSign, Star, Heart, Bed, Bath, Maximize } from 'lucide-react'
import Image from 'next/image'

export default function BuyPage() {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop',
      price: 'P2,500,000',
      name: 'Campus View Condo',
      location: 'IT Park, Cebu City',
      beds: 2,
      baths: 2,
      area: '45 m²',
      rating: 4.8,
      type: 'Condominium',
      pricePerSqm: 'P55,556/sqm'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop',
      price: 'P1,800,000',
      name: 'Student District Apartment',
      location: 'Lahug, Cebu City',
      beds: 3,
      baths: 2,
      area: '60 m²',
      rating: 4.6,
      type: 'Apartment',
      pricePerSqm: 'P30,000/sqm'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
      price: 'P3,200,000',
      name: 'Modern Studio Unit',
      location: 'Banilad, Cebu City',
      beds: 1,
      baths: 1,
      area: '35 m²',
      rating: 4.9,
      type: 'Studio',
      pricePerSqm: 'P91,429/sqm'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=300&fit=crop',
      price: 'P4,500,000',
      name: 'Luxury Student Housing',
      location: 'Talamban, Cebu City',
      beds: 4,
      baths: 3,
      area: '80 m²',
      rating: 4.7,
      type: 'Townhouse',
      pricePerSqm: 'P56,250/sqm'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Buy Student Properties</h1>
            <p className="text-xl text-gray-600">Invest in student housing or find your first property</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Enter location or neighborhood"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Budget Range</option>
                  <option>Under P2M</option>
                  <option>P2M - P3M</option>
                  <option>P3M - P5M</option>
                  <option>Above P5M</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button className="btn-outline flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Property Type</span>
                </button>
                <button className="btn-outline flex items-center space-x-2">
                  <span>Investment Type</span>
                </button>
                <button className="btn-primary flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Find Properties</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="card group">
                <div className="relative h-80 overflow-hidden rounded-t-xl">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    FOR SALE
                  </div>
                  <button className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 text-gray-600 hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-300">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-3xl font-bold text-primary-500">
                      {property.price}
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
                    {property.type} • {property.pricePerSqm}
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
