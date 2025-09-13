'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import AuthModal from './AuthModal'
import HoomLogo from './HoomLogo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setIsAuthOpen(true)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <HoomLogo size="md" />
              <span className="text-2xl font-bold text-gray-900">hoom</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/rent" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Rent
            </Link>
            <Link href="/buy" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Buy
            </Link>
            <Link href="/sell" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">
              Sell
            </Link>
            {isLoggedIn && (
              <div className="relative group">
                <Link href="/manage" className="flex items-center text-gray-700 hover:text-primary-500 font-medium transition-colors">
                  Manage Property
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/sell" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                    List Property
                  </Link>
                  <Link href="/manage" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                    Dashboard
                  </Link>
                  <Link href="/manage" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                    Analytics
                  </Link>
                </div>
              </div>
            )}
            <div className="relative group">
              <Link href="/blog" className="flex items-center text-gray-700 hover:text-primary-500 font-medium transition-colors">
                Blog
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  All Posts
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  FAQ
                </Link>
                <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-500">
                  Guides
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => openAuth('login')}
              className="btn-secondary"
            >
              Login
            </button>
            <button 
              onClick={() => openAuth('signup')}
              className="btn-primary"
            >
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
              <Link href="/rent" className="block text-gray-700 hover:text-primary-500 font-medium">
                Rent
              </Link>
              <Link href="/buy" className="block text-gray-700 hover:text-primary-500 font-medium">
                Buy
              </Link>
              <Link href="/sell" className="block text-gray-700 hover:text-primary-500 font-medium">
                Sell
              </Link>
              {isLoggedIn && (
                <Link href="/manage" className="block text-gray-700 hover:text-primary-500 font-medium">
                  Manage Property
                </Link>
              )}
              <Link href="/blog" className="block text-gray-700 hover:text-primary-500 font-medium">
                Blog
              </Link>
              <Link href="/faq" className="block text-gray-700 hover:text-primary-500 font-medium">
                FAQ
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button 
                  onClick={() => openAuth('login')}
                  className="w-full btn-secondary"
                >
                  Login
                </button>
                <button 
                  onClick={() => openAuth('signup')}
                  className="w-full btn-primary"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}

        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          mode={authMode}
          onModeChange={setAuthMode}
          onLogin={() => setIsLoggedIn(true)}
        />
      </div>
    </nav>
  )
}
