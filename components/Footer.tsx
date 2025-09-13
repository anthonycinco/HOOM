import Link from 'next/link'
import HoomLogo from './HoomLogo'

export default function Footer() {
  const footerLinks = {
    'SELL A HOME': [
      { name: 'Request an offer', href: '/sell' },
      { name: 'Pricing', href: '/resources' },
      { name: 'Reviews', href: '/resources' }
    ],
    'BUY, RENT AND SELL': [
      { name: 'Buy and sell properties', href: '/buy' },
      { name: 'Rent home', href: '/rent' },
      { name: 'Check HoomValue', href: '/resources' }
    ],
    'ABOUT': [
      { name: 'Company', href: '/blog' },
      { name: 'How it works', href: '/faq' },
      { name: 'Contact', href: '/faq' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <HoomLogo size="md" />
              <span className="text-2xl font-bold text-white">hoom</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Redefining student housing and real estate in the Philippines.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-sm font-semibold text-primary-300 mb-4 uppercase tracking-wider">
                    {title}
                  </h4>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2024 hoom. All rights reserved. Redefining student housing and real estate in the Philippines.
          </p>
        </div>
      </div>
    </footer>
  )
}
