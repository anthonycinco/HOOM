import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, FileText, HelpCircle, Phone, Mail, MessageCircle, Search } from 'lucide-react'
import Image from 'next/image'

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Guides',
      items: [
        {
          title: 'How to Find the Perfect Dormitory',
          description: 'Complete guide to finding student housing in Cebu',
          image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop',
          readTime: '5 min read'
        },
        {
          title: 'Understanding Rental Agreements',
          description: 'Everything you need to know about rental contracts',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop',
          readTime: '8 min read'
        },
        {
          title: 'Budgeting for Student Housing',
          description: 'Tips for managing your housing budget effectively',
          image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop',
          readTime: '6 min read'
        }
      ]
    },
    {
      category: 'Blog',
      items: [
        {
          title: 'Best Student Areas in Cebu',
          description: 'Discover the top neighborhoods for students',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop',
          readTime: '7 min read'
        },
        {
          title: 'Moving Day Checklist',
          description: 'Essential items to bring when moving to your new place',
          image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=400&h=250&fit=crop',
          readTime: '4 min read'
        },
        {
          title: 'Roommate Tips and Tricks',
          description: 'How to live harmoniously with roommates',
          image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop',
          readTime: '9 min read'
        }
      ]
    }
  ]

  const faqs = [
    {
      question: 'How do I verify a property listing?',
      answer: 'All properties on <span className="font-bold text-primary-600">hoom</span> are verified through our hoomvalue system. Look for the "hoomvalue CHECKED" badge on listings.'
    },
    {
      question: 'What fees does <span className="font-bold text-primary-600">hoom</span> charge?',
      answer: '<span className="font-bold text-primary-600">hoom</span> charges a 10% commission only when a successful rental transaction is completed. No upfront fees for students or landlords.'
    },
    {
      question: 'How do I contact a landlord?',
      answer: 'You can contact landlords directly through our messaging system or by clicking the "Contact" button on any property listing.'
    },
    {
      question: 'Can I schedule property viewings?',
      answer: 'Yes! You can schedule virtual tours or in-person viewings directly through our platform.'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Help</h1>
            <p className="text-xl text-gray-600">Find guides, tips, and answers to common questions</p>
          </div>

          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources, guides, or FAQs..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              {resources.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{item.readTime}</span>
                            <button className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
                              Read More →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Help</h3>
                <div className="space-y-4">
                  <button className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <BookOpen className="h-5 w-5 text-primary-500" />
                    <span>Getting Started Guide</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <FileText className="h-5 w-5 text-primary-500" />
                    <span>Download App</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <HelpCircle className="h-5 w-5 text-primary-500" />
                    <span>Report an Issue</span>
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-700">+63 917 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-700">support@<span className="font-bold text-primary-600">hoom</span>.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-700">Live Chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: faq.question }}></h3>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
