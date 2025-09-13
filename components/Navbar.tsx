'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, User, Globe, Menu as MenuIcon } from 'lucide-react'
import Link from 'next/link'
import AuthModal from './AuthModal'
import HoomLogo from './HoomLogo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setIsAuthOpen(true)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-airbnb-gray-100 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <HoomLogo size="md" />
            <span className="text-xl font-bold text-primary-600">hoom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/rent" className="text-airbnb-dark hover:text-primary-600 font-medium transition-colors">
              Rent
            </Link>
            <Link href="/buy" className="text-airbnb-dark hover:text-primary-600 font-medium transition-colors">
              Buy
            </Link>
            <Link href="/sell" className="text-airbnb-dark hover:text-primary-600 font-medium transition-colors">
              Sell
            </Link>
            <Link href="/blog" className="text-airbnb-dark hover:text-primary-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-airbnb-dark hover:text-primary-600 font-medium transition-colors">
              FAQ
            </Link>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Become a Host */}
            <Link href="/sell" className="text-airbnb-dark hover:text-primary-600 font-medium transition-colors">
              Become a Host
            </Link>

            {/* Language/Currency */}
            <button className="p-2 hover:bg-airbnb-gray-50 rounded-full transition-colors">
              <Globe className="h-5 w-5 text-airbnb-dark" />
            </button>

            {/* User Menu */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 border border-airbnb-gray-100 rounded-full hover:shadow-md transition-all"
                >
                  <MenuIcon className="h-4 w-4 text-airbnb-dark" />
                  <User className="h-5 w-5 text-airbnb-dark" />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-airbnb-gray-100 py-2">
                    <Link href="/manage" className="block px-4 py-2 text-airbnb-dark hover:bg-airbnb-gray-50">
                      Manage Properties
                    </Link>
                    <Link href="/profile" className="block px-4 py-2 text-airbnb-dark hover:bg-airbnb-gray-50">
                      Profile
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 text-airbnb-dark hover:bg-airbnb-gray-50">
                      Settings
                    </Link>
                    <hr className="my-2" />
                    <button 
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-left px-4 py-2 text-airbnb-dark hover:bg-airbnb-gray-50"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => openAuth('login')}
                  className="text-airbnb-dark hover:text-primary-600 font-medium transition-colors"
                >
                  Log in
                </button>
                <button 
                  onClick={() => openAuth('signup')}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sign up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-full hover:bg-airbnb-gray-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-airbnb-gray-100 bg-white">
            <div className="py-4 space-y-1">
              <Link 
                href="/rent" 
                className="block px-4 py-3 text-airbnb-dark hover:bg-airbnb-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Rent
              </Link>
              <Link 
                href="/buy" 
                className="block px-4 py-3 text-airbnb-dark hover:bg-airbnb-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Buy
              </Link>
              <Link 
                href="/sell" 
                className="block px-4 py-3 text-airbnb-dark hover:bg-airbnb-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell
              </Link>
              <Link 
                href="/blog" 
                className="block px-4 py-3 text-airbnb-dark hover:bg-airbnb-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/faq" 
                className="block px-4 py-3 text-airbnb-dark hover:bg-airbnb-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <hr className="my-4" />
              
              {isLoggedIn ? (
                <>
                  <Link 
                    href="/manage" 
                    className="block px-4 py-3 text-airbnb-dark hover:bg-airbnb-gray-50 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Manage Properties
                  </Link>
                  <Link 
                    href="/profile" 
                    className="block px-4 py-3 text-airbnb-dark hover:bg-airbnb-gray-50 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button 
                    onClick={() => {
                      setIsLoggedIn(false)
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left px-4 py-3 text-airbnb-dark hover:bg-airbnb-gray-50 font-medium"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <div className="px-4 space-y-2">
                  <button 
                    onClick={() => {
                      openAuth('login')
                      setIsMenuOpen(false)
                    }}
                    className="w-full text-left py-3 text-airbnb-dark font-medium"
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => {
                      openAuth('signup')
                      setIsMenuOpen(false)
                    }}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold shadow-lg"
                  >
                    Sign up
                  </button>
                </div>
              )}
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