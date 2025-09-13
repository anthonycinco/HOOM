'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      content: "hoom made finding my dormitory so easy! The verified listings saved me from scams and the process was transparent.",
      author: {
        name: "Sarah Johnson",
        role: "Student, USC",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
      }
    },
    {
      content: "As a landlord, hoom helped me reach more students and manage my properties efficiently. The platform is user-friendly.",
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            See what our property managers, landlords, and tenants have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-gray-600">
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
