'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center text-2xl font-bold text-gray-900">
              <span>hoom</span>
              <span className="text-primary-500 ml-1">🏠</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#rent" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Rent
            </a>
            <a href="#buy" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Buy
            </a>
            <a href="#sell" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Sell
            </a>
            <div className="relative group">
              <a href="#manage" className="flex items-center text-gray-700 hover:text-primary-500 font-medium transition-colors">
                Manage Property
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#list-property" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  List Property
                </a>
                <a href="#dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  Dashboard
                </a>
                <a href="#analytics" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  Analytics
                </a>
              </div>
            </div>
            <div className="relative group">
              <a href="#resources" className="flex items-center text-gray-700 hover:text-primary-500 font-medium transition-colors">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  Blog
                </a>
                <a href="#guides" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  Guides
                </a>
                <a href="#faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  FAQ
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">
              Login
            </button>
            <button className="btn-primary">
              Sign up
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#rent" className="block text-gray-700 hover:text-primary-500 font-medium">
                Rent
              </a>
              <a href="#buy" className="block text-gray-700 hover:text-primary-500 font-medium">
                Buy
              </a>
              <a href="#sell" className="block text-gray-700 hover:text-primary-500 font-medium">
                Sell
              </a>
              <a href="#manage" className="block text-gray-700 hover:text-primary-500 font-medium">
                Manage Property
              </a>
              <a href="#resources" className="block text-gray-700 hover:text-primary-500 font-medium">
                Resources
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="w-full btn-secondary">
                  Login
                </button>
                <button className="w-full btn-primary">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
