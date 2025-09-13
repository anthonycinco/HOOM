'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BarChart3, Home, Users, DollarSign, Calendar, Settings, Plus, Eye, Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ManagePage() {
  const { t } = useLanguage()
  const properties = [
    {
      id: 1,
      name: 'Orion\'s Homestay',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop',
      status: 'Active',
      price: 'P8,500',
      views: 245,
      inquiries: 12,
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      name: 'Golden Pad',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop',
      status: 'Rented',
      price: 'P7,200',
      views: 189,
      inquiries: 8,
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      name: 'Homenest',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop',
      status: 'Active',
      price: 'P10,500',
      views: 312,
      inquiries: 15,
      lastUpdated: '1 day ago'
    }
  ]

  const stats = [
    { label: 'Total Properties', value: '12', icon: Home, color: 'text-blue-500' },
    { label: 'Active Listings', value: '8', icon: Home, color: 'text-green-500' },
    { label: 'Total Views', value: '2,456', icon: Eye, color: 'text-purple-500' },
    { label: 'Monthly Revenue', value: 'P85,200', icon: DollarSign, color: 'text-yellow-500' }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Manage Properties</h1>
            <p className="text-xl text-gray-600">Track your listings, manage bookings, and analyze performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Your Properties</h2>
                    <button className="btn-primary flex items-center space-x-2">
                      <Plus className="h-5 w-5" />
                      <span>Add Property</span>
                    </button>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {properties.map((property) => (
                    <div key={property.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                          <Image
                            src={property.image}
                            alt={property.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
                              <p className="text-sm text-gray-600">{property.price}/month</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              property.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {property.status}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{property.views} views</span>
                            </span>
                            <span>{property.inquiries} inquiries</span>
                            <span>Updated {property.lastUpdated}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <Plus className="h-5 w-5 text-primary-500" />
                    <span>Add New Property</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <BarChart3 className="h-5 w-5 text-primary-500" />
                    <span>View Analytics</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <Users className="h-5 w-5 text-primary-500" />
                    <span>Manage Tenants</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <Settings className="h-5 w-5 text-primary-500" />
                    <span>Account Settings</span>
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900">New inquiry for Orion's Homestay</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900">Property views increased by 15%</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900">Payment received for Golden Pad</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
