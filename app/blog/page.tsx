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
      excerpt: 'Everything you need to know about finding the perfect dormitory or apartment as a student in Cebu City. From budget planning to location tips, safety considerations, and roommate etiquette. Learn about the best neighborhoods near major universities, average rental prices, and essential amenities to look for.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '12 min read',
      category: 'Housing Guide',
      featured: true,
      content: `Finding the right student housing in Cebu can be overwhelming, especially for first-time renters. This comprehensive guide covers everything from budget planning to safety tips.

**Budget Planning**
- Average rent: P5,000-P15,000/month
- Utilities: P1,500-P3,000/month
- Security deposit: 1-2 months rent
- Additional costs: Internet, laundry, transportation

**Best Student Areas**
1. **Talamban** - Near USC, affordable options
2. **Lahug** - Close to UP Cebu, modern apartments
3. **IT Park** - Tech hub, higher prices but great amenities
4. **Banilad** - Quiet area, good for studying
5. **Colon Street** - Historic area, budget-friendly

**Essential Amenities to Look For**
- 24/7 security
- WiFi connectivity
- Laundry facilities
- Study areas
- Common kitchen
- Air conditioning
- Proximity to public transport

**Safety Considerations**
- Check neighborhood safety ratings
- Verify landlord credentials
- Read rental agreements carefully
- Take photos of property condition
- Know your rights as a tenant

**Red Flags to Avoid**
- Unusually low prices
- No written contract
- Landlord asking for cash only
- Property in poor condition
- No security measures

Remember to visit properties in person, ask questions, and trust your instincts. Your safety and comfort should always come first.`
    },
    {
      id: 2,
      title: 'Budget-Friendly Student Housing: How to Save Money',
      excerpt: 'Learn practical tips and tricks to find affordable housing without compromising on safety and comfort. Discover money-saving strategies, shared living options, and how to negotiate rent prices effectively.',
      image: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=600&h=400&fit=crop',
      author: 'Mike Chen',
      date: 'December 12, 2024',
      readTime: '8 min read',
      category: 'Budget Tips',
      featured: false,
      content: `Being a student often means living on a tight budget, but that doesn't mean you have to compromise on safety and comfort. Here are proven strategies to find affordable housing in Cebu.

**Money-Saving Strategies**
1. **Share with Roommates** - Split rent and utilities
2. **Look for Dormitories** - Often cheaper than apartments
3. **Consider Older Buildings** - Lower rent, same safety
4. **Negotiate Rent** - Especially for longer leases
5. **Look Off-Season** - Avoid peak rental periods

**Budget Breakdown (Monthly)**
- Rent: P4,000-P8,000 (shared)
- Utilities: P800-P1,500 (split)
- Internet: P500-P1,000 (shared)
- Food: P3,000-P5,000
- Transportation: P1,000-P2,000
- **Total: P9,300-P17,500**

**Shared Living Tips**
- Find compatible roommates
- Set clear house rules
- Split costs fairly
- Communicate openly
- Respect each other's space

**Negotiation Tactics**
- Offer to pay 3-6 months upfront
- Sign longer lease terms
- Mention your student status
- Highlight your reliability
- Be flexible with move-in dates

**Hidden Costs to Watch For**
- Security deposits
- Association fees
- Water and electricity deposits
- Internet installation
- Moving costs

**Red Flags in Cheap Listings**
- No written contract
- Unusually low prices
- Poor location
- No security
- Landlord red flags

Remember: Cheap doesn't always mean good value. Prioritize safety and location over saving a few hundred pesos.`
    },
    {
      id: 3,
      title: 'Roommate Etiquette: Living Harmoniously in Shared Spaces',
      excerpt: 'Essential guidelines for maintaining good relationships with roommates and creating a positive living environment in student housing. Learn communication strategies, house rules, and conflict resolution techniques.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
      author: 'Emma Rodriguez',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Lifestyle',
      featured: false,
      content: `Living with roommates can be one of the most rewarding or challenging experiences of student life. Here's how to create a harmonious living environment.

**Setting House Rules**
- Quiet hours (10 PM - 7 AM)
- Cleaning schedule
- Guest policies
- Shared space usage
- Bill payment responsibilities

**Communication is Key**
- Weekly house meetings
- Use group chats for updates
- Address issues immediately
- Be respectful and honest
- Listen to others' concerns

**Common Roommate Issues & Solutions**
1. **Messy Spaces** - Create cleaning schedules
2. **Noise Complaints** - Set quiet hours
3. **Bills & Money** - Use apps like Splitwise
4. **Guests** - Establish guest policies
5. **Personal Items** - Respect boundaries

**Financial Responsibilities**
- Split utilities fairly
- Keep receipts for shared expenses
- Use money-tracking apps
- Pay bills on time
- Discuss large purchases

**Personal Space & Privacy**
- Knock before entering rooms
- Don't borrow without asking
- Respect study time
- Keep personal items separate
- Maintain boundaries

**Conflict Resolution**
1. Address issues directly
2. Use "I" statements
3. Listen actively
4. Find compromises
5. Involve landlord if needed

**Red Flags to Watch For**
- Disrespectful behavior
- Not paying bills
- Bringing strangers home
- Damaging property
- Refusing to communicate

**Building Positive Relationships**
- Share meals occasionally
- Study together
- Support each other
- Celebrate achievements
- Be understanding

Remember: Good roommates become lifelong friends. Invest in these relationships and always treat others as you'd like to be treated.`
    },
    {
      id: 4,
      title: 'Best Student Areas in Cebu: A Neighborhood Guide',
      excerpt: 'Discover the top neighborhoods for students in Cebu, including proximity to universities, amenities, transportation options, and average rental prices for each area.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
      author: 'David Park',
      date: 'December 8, 2024',
      readTime: '10 min read',
      category: 'Location Guide',
      featured: false,
      content: `Choosing the right neighborhood can make or break your student experience. Here's a comprehensive guide to Cebu's best student areas.

**1. Talamban - USC Area**
- **Universities**: University of San Carlos
- **Average Rent**: P4,000-P8,000
- **Pros**: Affordable, student-friendly, many food options
- **Cons**: Can be noisy, limited nightlife
- **Transportation**: Jeepneys, buses, tricycles
- **Best For**: Budget-conscious students

**2. Lahug - UP Cebu Area**
- **Universities**: University of the Philippines Cebu
- **Average Rent**: P6,000-P12,000
- **Pros**: Quiet, good for studying, near malls
- **Cons**: Higher prices, limited public transport
- **Transportation**: Jeepneys, Grab, taxis
- **Best For**: Graduate students, those who prefer quiet

**3. IT Park - Modern Living**
- **Universities**: Cebu Institute of Technology
- **Average Rent**: P8,000-P15,000
- **Pros**: Modern amenities, 24/7 security, great food
- **Cons**: Expensive, busy area
- **Transportation**: BRT, jeepneys, Grab
- **Best For**: Tech students, those who can afford it

**4. Banilad - Residential**
- **Universities**: Cebu Normal University
- **Average Rent**: P5,000-P10,000
- **Pros**: Residential feel, safe, good for families
- **Cons**: Far from city center, limited options
- **Transportation**: Jeepneys, private vehicles
- **Best For**: Students who prefer quiet living

**5. Colon Street - Historic & Budget**
- **Universities**: University of Cebu
- **Average Rent**: P3,000-P6,000
- **Pros**: Very affordable, central location
- **Cons**: Older buildings, safety concerns at night
- **Transportation**: All public transport available
- **Best For**: Budget students, those who love city life

**Transportation Guide**
- **Jeepneys**: P8-P15, most common
- **BRT**: P15-P25, modern and fast
- **Grab/Taxi**: P50-P200, convenient but expensive
- **Tricycles**: P15-P30, short distances only

**Safety Ratings by Area**
1. IT Park - 9/10
2. Lahug - 8/10
3. Banilad - 8/10
4. Talamban - 7/10
5. Colon Street - 6/10

Choose based on your budget, university location, and lifestyle preferences.`
    },
    {
      id: 5,
      title: 'Moving Day Checklist: What to Bring to Your New Dorm',
      excerpt: 'A comprehensive checklist of essential items every student should bring when moving into their new dormitory or apartment. From basic necessities to study supplies and personal items.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      author: 'Lisa Wang',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Moving Tips',
      featured: false,
      content: `Moving to your first dorm or apartment is exciting but overwhelming. This checklist ensures you don't forget anything important.

**Essential Documents**
- Valid ID (2 copies)
- School ID
- Proof of enrollment
- Rental agreement
- Emergency contact list
- Medical records
- Insurance documents

**Bedroom Essentials**
- Bed sheets (2 sets)
- Pillows and pillowcases
- Blanket or comforter
- Mattress protector
- Curtains or blinds
- Desk lamp
- Alarm clock
- Laundry hamper

**Bathroom Items**
- Towels (3-4 pieces)
- Shower curtain
- Bath mat
- Toiletries (shampoo, soap, etc.)
- Toothbrush and toothpaste
- Hair dryer
- First aid kit

**Kitchen Supplies**
- Plates, bowls, cups
- Utensils (forks, spoons, knives)
- Cooking pots and pans
- Microwave-safe containers
- Water bottle
- Coffee maker or kettle
- Basic spices

**Study Materials**
- Laptop and charger
- Notebooks and pens
- Desk organizer
- Printer (if needed)
- Calculator
- Books and textbooks
- Study lamp

**Clothing**
- Casual clothes (1 week supply)
- Formal wear (2-3 sets)
- Undergarments (1 week supply)
- Shoes (casual, formal, slippers)
- Jacket or sweater
- Rain gear

**Cleaning Supplies**
- All-purpose cleaner
- Sponges and rags
- Broom and dustpan
- Vacuum cleaner (if space allows)
- Trash bags
- Air freshener

**Personal Items**
- Photos and decorations
- Favorite books
- Hobby supplies
- Medications
- Important phone numbers
- Cash for emergencies

**Things to Check Before Moving**
- Internet connection
- Air conditioning/heating
- Water pressure
- Electrical outlets
- Security measures
- Parking availability
- Nearby amenities

**Packing Tips**
- Use clear plastic bins
- Label everything
- Pack heavy items first
- Keep essentials accessible
- Take photos of valuable items
- Make an inventory list

**First Day Priorities**
1. Unpack essentials first
2. Set up your study area
3. Meet your roommates
4. Locate emergency exits
5. Test all appliances
6. Find nearby stores
7. Set up internet

Remember: You can always buy more things later. Focus on essentials first!`
    },
    {
      id: 6,
      title: 'Safety Tips for Student Housing in Cebu',
      excerpt: 'Important safety considerations and precautions to take when living in student housing, including security measures, emergency preparedness, and personal safety tips.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      author: 'James Wilson',
      date: 'December 3, 2024',
      readTime: '8 min read',
      category: 'Safety',
      featured: false,
      content: `Your safety should always be the top priority when choosing and living in student housing. Here are essential safety tips for students in Cebu.

**Choosing Safe Housing**
- Check security measures (guards, CCTV, locks)
- Verify landlord credentials
- Read online reviews
- Visit at different times of day
- Check neighborhood safety ratings
- Ensure good lighting around building

**Home Security Measures**
- Always lock doors and windows
- Don't give keys to strangers
- Install additional locks if needed
- Keep valuables hidden
- Don't advertise when you're away
- Get to know your neighbors

**Personal Safety Tips**
- Share your location with trusted friends
- Keep emergency contacts handy
- Trust your instincts
- Avoid walking alone at night
- Use well-lit routes
- Keep your phone charged

**Emergency Preparedness**
- Know emergency exits
- Have a fire escape plan
- Keep emergency supplies
- Know local emergency numbers
- Have a first aid kit
- Keep important documents safe

**Important Phone Numbers**
- Police: 117
- Fire: 160
- Medical: 117
- Barangay: Check local number
- Building security: Get contact info
- Landlord: Keep handy

**Red Flags to Watch For**
- No security measures
- Poor lighting
- Broken locks
- Suspicious landlord behavior
- High crime area
- No emergency exits

**What to Do in Emergencies**
1. **Fire**: Evacuate immediately, call 160
2. **Medical**: Call 117, get help
3. **Break-in**: Call police, don't confront
4. **Natural disaster**: Follow evacuation plan
5. **Power outage**: Use flashlights, check neighbors

**Building a Safety Network**
- Get to know your roommates
- Meet your neighbors
- Join student groups
- Keep family informed
- Make friends in the area
- Know local resources

**Technology Safety**
- Use security apps
- Share location with trusted people
- Keep devices updated
- Use strong passwords
- Be careful with social media
- Don't share personal info online

**Financial Safety**
- Don't keep large amounts of cash
- Use secure payment methods
- Keep receipts for rent payments
- Don't lend money to strangers
- Keep financial documents safe
- Use bank apps for transactions

**Mental Health & Safety**
- Stay connected with family
- Join student support groups
- Know where to get help
- Take care of your mental health
- Don't isolate yourself
- Seek help when needed

Remember: Your safety is more important than saving money. Always prioritize security over cost when choosing housing.`
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
