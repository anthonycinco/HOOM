import Link from 'next/link'
import HoomLogo from './HoomLogo'

export default function Footer() {
  const footerLinks = {
    'Support': [
      { name: 'Help Center', href: '/faq' },
      { name: 'Safety information', href: '/faq' },
      { name: 'Cancellation options', href: '/faq' },
      { name: 'Our COVID-19 Response', href: '/faq' },
      { name: 'Report a neighborhood concern', href: '/faq' }
    ],
    'Community': [
      { name: 'Disaster relief housing', href: '/blog' },
      { name: 'Support refugees', href: '/blog' },
      { name: 'Combating discrimination', href: '/blog' }
    ],
    'Hosting': [
      { name: 'Try hosting', href: '/sell' },
      { name: 'AirCover: protection for Hosts', href: '/sell' },
      { name: 'Explore hosting resources', href: '/sell' },
      { name: 'Visit our community forum', href: '/blog' },
      { name: 'How to host responsibly', href: '/blog' }
    ],
    'About': [
      { name: 'Newsroom', href: '/blog' },
      { name: 'New features', href: '/blog' },
      { name: 'Careers', href: '/blog' },
      { name: 'Investors', href: '/blog' }
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <HoomLogo size="md" />
                <span className="text-2xl font-bold text-primary-400">hoom</span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Redefining student housing and real estate in the Philippines. 
                Find your perfect home away from home.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-white font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-white font-bold">t</span>
                </button>
                <button className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-white font-bold">in</span>
                </button>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-lg font-bold text-white mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">
                  © 2024 hoom, Inc. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                  <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm font-medium transition-colors">
                    Privacy
                  </Link>
                  <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm font-medium transition-colors">
                    Terms
                  </Link>
                  <Link href="/sitemap" className="text-gray-400 hover:text-primary-400 text-sm font-medium transition-colors">
                    Sitemap
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 text-sm font-medium transition-colors">
                  <span>🌐</span>
                  <span>English (US)</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 text-sm font-medium transition-colors">
                  <span>💵</span>
                  <span>PHP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}