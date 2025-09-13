'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronDown, Search, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What is hoom and how does it work?',
          answer: 'hoom is a student housing platform that connects students with verified dormitories and apartments in Cebu. We provide a safe, transparent way to find housing with no hidden fees. Simply search for properties, view verified listings, and contact landlords directly through our platform.'
        },
        {
          question: 'Is hoom free to use for students?',
          answer: 'Yes! hoom is completely free for students to browse and search for housing. We only charge a 10% commission to landlords when a successful rental transaction is completed. Students never pay any upfront fees or hidden charges.'
        },
        {
          question: 'How do I verify a property listing?',
          answer: 'All properties on hoom are verified through our hoomvalue system. Look for the "hoomvalue CHECKED" badge on listings. This means the property has been inspected, the landlord is verified, and all information is accurate and up-to-date.'
        },
        {
          question: 'Can I trust the property information on hoom?',
          answer: 'Absolutely! All property information is verified by our team. We conduct regular inspections and work only with trusted landlords. If you find any inaccurate information, please report it to us immediately.'
        }
      ]
    },
    {
      title: 'Finding Housing',
      items: [
        {
          question: 'How do I search for student housing?',
          answer: 'Use our search filters to find properties by location, price range, number of bedrooms, and amenities. You can also browse by neighborhood or university proximity. Our smart matching system will show you the most relevant properties first.'
        },
        {
          question: 'What areas in Cebu are best for students?',
          answer: 'Popular student areas include Talamban (near USC), Lahug (near UP Cebu), IT Park, Banilad, and Colon Street. Each area has different advantages - proximity to universities, transportation, shopping, and nightlife. Check our neighborhood guides for detailed information.'
        },
        {
          question: 'Can I schedule property viewings?',
          answer: 'Yes! You can schedule both virtual tours and in-person viewings directly through our platform. Simply click the "Schedule Viewing" button on any property listing and choose your preferred time slot.'
        },
        {
          question: 'What if I can\'t find housing in my preferred area?',
          answer: 'Try expanding your search radius or adjusting your budget. You can also set up alerts to be notified when new properties in your preferred area become available. Our customer support team can also help you find alternatives.'
        }
      ]
    },
    {
      title: 'Rental Process',
      items: [
        {
          question: 'How do I contact a landlord?',
          answer: 'Click the "Contact Landlord" button on any property listing. You can send messages directly through our platform, or call them using the provided phone number. All communication is tracked for your safety.'
        },
        {
          question: 'What documents do I need to rent a property?',
          answer: 'Typically, you\'ll need a valid ID, proof of enrollment, and sometimes a guarantor\'s information. Some landlords may also require a deposit. Check the specific requirements listed on each property page.'
        },
        {
          question: 'How much deposit do I need to pay?',
          answer: 'Deposit amounts vary by property, but typically range from 1-2 months\' rent. This information is clearly displayed on each property listing. The deposit is usually refundable when you move out, minus any damages.'
        },
        {
          question: 'Can I negotiate the rent price?',
          answer: 'Some landlords are open to negotiation, especially for longer rental periods. You can discuss this directly with the landlord during your communication. However, prices listed on hoom are generally competitive and fair.'
        }
      ]
    },
    {
      title: 'Payment & Fees',
      items: [
        {
          question: 'What fees does hoom charge?',
          answer: 'hoom charges a 10% commission to landlords only when a successful rental transaction is completed. Students pay no fees to use our platform. The commission is included in the rent price, so there are no hidden charges.'
        },
        {
          question: 'How do I pay my rent?',
          answer: 'Rent payments are made directly to the landlord, not through hoom. Payment methods vary by landlord but typically include bank transfer, cash, or online payment platforms. Discuss payment terms with your landlord before signing the lease.'
        },
        {
          question: 'What if I have payment issues?',
          answer: 'If you\'re having trouble with rent payments, contact your landlord immediately to discuss options. hoom can also help mediate payment disputes and provide guidance on your rights as a tenant.'
        },
        {
          question: 'Are there any hidden costs?',
          answer: 'No! hoom is committed to transparency. All costs are clearly displayed upfront. The only fee is the 10% commission paid by landlords, which is already factored into the rent price you see.'
        }
      ]
    },
    {
      title: 'Safety & Support',
      items: [
        {
          question: 'How do I report a problem with a property or landlord?',
          answer: 'Use our "Report Issue" feature on any property listing, or contact our customer support team directly. We take all reports seriously and will investigate promptly. You can also leave reviews to help other students.'
        },
        {
          question: 'What if I feel unsafe in my rental?',
          answer: 'Your safety is our top priority. If you feel unsafe, contact us immediately at our emergency hotline. We can help you find alternative housing and connect you with local authorities if needed.'
        },
        {
          question: 'Does hoom provide tenant insurance?',
          answer: 'hoom doesn\'t provide insurance, but we recommend all tenants get renters insurance. This protects your personal belongings and provides liability coverage. Many insurance companies offer affordable student plans.'
        },
        {
          question: 'How can I get help if I have questions?',
          answer: 'Our customer support team is available 24/7 via live chat, email, or phone. You can also check our comprehensive help center with guides and tutorials. We\'re here to help make your housing search as smooth as possible.'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about student housing, rental process, and using hoom
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-primary-50 px-6 py-4">
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex
                    const isOpen = openItems.has(globalIndex)
                    return (
                      <div key={itemIndex} className="p-6">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full flex items-center justify-between text-left hover:text-primary-500 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-400 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="mt-4 text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-xl text-gray-600">
                Our support team is here to help you find the perfect student housing
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak with our housing experts</p>
                <p className="text-primary-500 font-semibold">+63 917 123 4567</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get detailed answers via email</p>
                <p className="text-primary-500 font-semibold">support@hoom.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with us in real-time</p>
                <button className="btn-primary">Start Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
