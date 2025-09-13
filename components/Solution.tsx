'use client'

import { useState } from 'react'
import { Play, Home, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Solution() {
  const [activeUserType, setActiveUserType] = useState('tenants')

  const userContent = {
    tenants: {
      title: 'We make it easy for students to find housing',
      description: 'Whether you\'re looking for your first dormitory or upgrading to a better place, we simplify the search process and make it efficient. The best part? You\'ll save time and money with <span className="font-bold text-primary-600">hoom</span>\'s trusted, transparent platform.'
    },
    landlords: {
      title: 'We make it easy for landlords to manage properties',
      description: 'Whether you\'re listing your first property or managing multiple units, we simplify the rental process and make it efficient. The best part? You\'ll reach more students and maximize your income with <span className="font-bold text-primary-600">hoom</span>\'s trusted, transparent platform.'
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
                alt="Student housing building"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3 max-w-xs">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <Play className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Virtual room tour</div>
                <div className="text-sm text-gray-600">We provide you with virtual tour</div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3 max-w-xs">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Find the best deal</div>
                <div className="text-sm text-gray-600">Browse thousands of properties</div>
              </div>
            </div>
          </div>

          <div className="max-w-lg">
            <div className="flex space-x-2 mb-8">
              {['tenants', 'landlords'].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveUserType(type)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize ${
                    activeUserType === type
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  For {type}
                </button>
              ))}
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {userContent[activeUserType as keyof typeof userContent].title.split(' ').map((word, index) => 
                word === 'easy' ? (
                  <span key={index} className="text-primary-500"> {word} </span>
                ) : (
                  <span key={index}> {word} </span>
                )
              )}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: userContent[activeUserType as keyof typeof userContent].description }}>
            </p>

            <Link href="/blog" className="btn-primary flex items-center space-x-2">
              <span>See more</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
