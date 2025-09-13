import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Upload, MapPin, DollarSign, Home, Camera, FileText, CheckCircle } from 'lucide-react'

export default function SellPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Sell Your Property</h1>
              <p className="text-xl text-gray-600">List your property and reach thousands of students looking for housing</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option>Select Property Type</option>
                        <option>Dormitory</option>
                        <option>Apartment</option>
                        <option>Condominium</option>
                        <option>Studio</option>
                        <option>Townhouse</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="text"
                          placeholder="Enter property address"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price (PHP)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="number"
                          placeholder="Enter asking price"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        rows={4}
                        placeholder="Describe your property..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Photos</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Drag and drop photos here or click to upload</p>
                    <button className="btn-outline">Choose Files</button>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose hoom?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">Reach thousands of students</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">Professional photography</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">Verified listings only</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">24/7 customer support</span>
                    </div>
                  </div>
                </div>

                <button className="w-full btn-primary text-lg py-4">
                  <Upload className="h-6 w-6 mr-2" />
                  List My Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
