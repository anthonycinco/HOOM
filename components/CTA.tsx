'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Email submitted:', email)
      setEmail('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-white/10 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Join Our Community
          </div>
          <h2 className="text-3xl text-primary-200 mb-4 font-semibold">No Spam Promise</h2>
          <h3 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Are you a 
            <span className="text-white"> landlord?</span>
          </h3>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover ways to increase your occupancy and get listed. No Spam, just valuable insights and opportunities.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </button>
          </form>

          <p className="text-primary-200 text-lg font-medium">
            Join <span className="text-white font-bold">10,000+</span> other landlords in our community.
          </p>
        </div>
      </div>
    </section>
  )
}
