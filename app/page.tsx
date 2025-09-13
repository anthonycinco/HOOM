import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Solution from '@/components/Solution'
import Properties from '@/components/Properties'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Solution />
      <Properties />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
