'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      content: "<span className='font-bold text-primary-600'>hoom</span> made finding my dormitory so easy! The verified listings saved me from scams and the process was transparent.",
      author: {
        name: "Sarah Johnson",
        role: "Student, USC",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
      }
    },
    {
      content: "As a landlord, <span className='font-bold text-primary-600'>hoom</span> helped me reach more students and manage my properties efficiently. The platform is user-friendly.",
      author: {
        name: "Michael Chen",
        role: "Property Owner",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
      }
    },
    {
      content: "The virtual tours and detailed property information helped me make the right choice. Highly recommended!",
      author: {
        name: "Emma Rodriguez",
        role: "Student, UP Cebu",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
      }
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            What People Say
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our property managers, landlords, and tenants have to say about their experience with <span className="font-bold text-primary-600">hoom</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="mb-8">
                <div className="text-6xl text-primary-200 mb-4">"</div>
                <p className="text-lg text-gray-700 leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: testimonial.content }}>
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover ring-4 ring-primary-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-primary-600 font-semibold">
                    {testimonial.author.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
