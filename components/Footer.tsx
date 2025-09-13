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
    <footer className="bg-white border-t border-airbnb-gray-100">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <HoomLogo size="md" />
                <span className="text-xl font-bold text-airbnb-red">hoom</span>
              </Link>
              <p className="text-airbnb-gray-300 text-sm leading-relaxed">
                Redefining student housing and real estate in the Philippines. 
                Find your perfect home away from home.
              </p>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-airbnb-dark mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-airbnb-gray-300 hover:text-airbnb-dark transition-colors text-sm"
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
          <div className="border-t border-airbnb-gray-100 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-airbnb-gray-300 text-sm">
                  © 2024 hoom, Inc. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                  <Link href="/privacy" className="text-airbnb-gray-300 hover:text-airbnb-dark text-sm">
                    Privacy
                  </Link>
                  <Link href="/terms" className="text-airbnb-gray-300 hover:text-airbnb-dark text-sm">
                    Terms
                  </Link>
                  <Link href="/sitemap" className="text-airbnb-gray-300 hover:text-airbnb-dark text-sm">
                    Sitemap
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-airbnb-gray-300 hover:text-airbnb-dark text-sm">
                  <span>🌐</span>
                  <span>English (US)</span>
                </button>
                <button className="flex items-center space-x-2 text-airbnb-gray-300 hover:text-airbnb-dark text-sm">
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