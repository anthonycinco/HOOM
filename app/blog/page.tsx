import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Finding Student Housing in Cebu',
      excerpt: 'Everything you need to know about finding the perfect dormitory or apartment as a student in Cebu City. From budget planning to location tips.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Housing Guide',
      featured: true
    },
    {
      id: 2,
      title: 'Budget-Friendly Student Housing: How to Save Money',
      excerpt: 'Learn practical tips and tricks to find affordable housing without compromising on safety and comfort. Perfect for students on a tight budget.',
      image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=600&h=400&fit=crop',
      author: 'Mike Chen',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'Budget Tips',
      featured: false
    },
    {
      id: 3,
      title: 'Roommate Etiquette: Living Harmoniously in Shared Spaces',
      excerpt: 'Essential guidelines for maintaining good relationships with roommates and creating a positive living environment in student housing.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
      author: 'Emma Rodriguez',
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'Lifestyle',
      featured: false
    },
    {
      id: 4,
      title: 'Best Student Areas in Cebu: A Neighborhood Guide',
      excerpt: 'Discover the top neighborhoods for students in Cebu, including proximity to universities, amenities, and transportation options.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      author: 'David Park',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Location Guide',
      featured: false
    },
    {
      id: 5,
      title: 'Moving Day Checklist: What to Bring to Your New Dorm',
      excerpt: 'A comprehensive checklist of essential items every student should bring when moving into their new dormitory or apartment.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      author: 'Lisa Wang',
      date: 'December 5, 2024',
      readTime: '4 min read',
      category: 'Moving Tips',
      featured: false
    },
    {
      id: 6,
      title: 'Safety Tips for Student Housing in Cebu',
      excerpt: 'Important safety considerations and precautions to take when living in student housing, including security measures and emergency preparedness.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      author: 'James Wilson',
      date: 'December 3, 2024',
      readTime: '6 min read',
      category: 'Safety',
      featured: false
    }
  ]

  const categories = ['All', 'Housing Guide', 'Budget Tips', 'Lifestyle', 'Location Guide', 'Moving Tips', 'Safety']

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-8">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Student Housing Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tips, guides, and insights to help you find the perfect student housing in Cebu
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === 'All'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="flex items-center text-sm text-gray-500">
                          <Tag className="h-4 w-4 mr-1" />
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-500 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-primary-500" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="flex items-center text-primary-500 hover:text-primary-600 font-medium"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Categories</h3>
                <div className="space-y-3">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="text-gray-700">{category}</span>
                      <span className="text-sm text-gray-500">12</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest student housing tips and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="w-full btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
