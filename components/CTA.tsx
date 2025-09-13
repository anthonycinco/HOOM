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
    <section className="section-padding bg-secondary text-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl text-primary-300 mb-4">No Spam Promise</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            Are you a landlord?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Discover ways to increase your occupancy and get listed. No Spam.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          <p className="text-gray-400 text-sm">
            Join 10,000+ other landlords in our estatery community.
          </p>
        </div>
      </div>
    </section>
  )
}
