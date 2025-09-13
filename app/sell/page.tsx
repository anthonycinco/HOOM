import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Upload, MapPin, DollarSign, Home, Camera, FileText, CheckCircle } from 'lucide-react'

export default function SellPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                List Your Property
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Sell Your Property</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">List your property and reach thousands of students looking for housing. Join our community of successful property owners.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-10">
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Property Details</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">Property Type</label>
                      <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg">
                        <option>Select Property Type</option>
                        <option>Dormitory</option>
                        <option>Apartment</option>
                        <option>Condominium</option>
                        <option>Studio</option>
                        <option>Townhouse</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                        <input
                          type="text"
                          placeholder="Enter property address"
                          className="w-full pl-16 pr-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-3">Bedrooms</label>
                        <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-3">Bathrooms</label>
                        <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">Price (PHP)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                        <input
                          type="number"
                          placeholder="Enter asking price"
                          className="w-full pl-16 pr-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">Description</label>
                      <textarea
                        rows={6}
                        placeholder="Describe your property in detail..."
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Upload Photos</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-primary-400 transition-colors duration-300">
                    <Camera className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                    <p className="text-lg text-gray-600 mb-6">Drag and drop photos here or click to upload</p>
                    <button className="px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors duration-300">
                      Choose Files
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-700 mb-3">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-10 rounded-3xl border border-primary-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose hoom?</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="h-6 w-6 text-primary-500" />
                      <span className="text-lg text-gray-700 font-medium">Reach thousands of students</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="h-6 w-6 text-primary-500" />
                      <span className="text-lg text-gray-700 font-medium">Professional photography</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="h-6 w-6 text-primary-500" />
                      <span className="text-lg text-gray-700 font-medium">Verified listings only</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="h-6 w-6 text-primary-500" />
                      <span className="text-lg text-gray-700 font-medium">24/7 customer support</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-6 px-8 rounded-2xl font-bold text-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3">
                  <Upload className="h-6 w-6" />
                  <span>List My Property</span>
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
