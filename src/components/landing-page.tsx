'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


// Stellen Sie sicher, dass Sie diese Pakete installiert haben:
// npm install react-slick slick-carousel

export function LandingPageComponent() {


  const logos = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-4xl font-bold">
          <span className="sr-only">Logo</span>
          A
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-pink-500 font-medium">Home</Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</Link>
          <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
          <Link href="/learn" className="text-gray-600 hover:text-gray-900">Learn</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 font-medium">Log In</button>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition duration-300">Contact Us</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-pink-500">10x</span> Your Outbound Outreach With <span className="text-pink-500">Real Accounts</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Deploy an army of ID verified profiles and reach thousands of leads every single day without worrying about suspensions or permanent bans.
          </p>
          <div className="flex space-x-4 mb-8">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition duration-300">
              Book a Call →
            </button>
            <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300">
              Our Services
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <Image src="/placeholder.svg" alt="Trustpilot" width={120} height={30} />
            <Image src="/placeholder.svg" alt="Capterra" width={120} height={30} />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="bg-pink-200 rounded-full p-4 md:p-8">
            <Image src="/placeholder.svg" alt="Hero Image" width={500} height={500} className="rounded-full" />
          </div>
          {/* Circular profile images */}
          <div className="absolute top-0 left-0 w-16 h-16 -mt-8 -ml-8">
            <Image src="/placeholder.svg" alt="Profile 1" width={64} height={64} className="rounded-full" />
          </div>
          <div className="absolute top-1/4 right-0 w-20 h-20 -mr-10">
            <Image src="/placeholder.svg" alt="Profile 2" width={80} height={80} className="rounded-full" />
          </div>
          <div className="absolute bottom-1/4 left-0 w-24 h-24 -ml-12">
            <Image src="/placeholder.svg" alt="Profile 3" width={96} height={96} className="rounded-full" />
          </div>
          <div className="absolute bottom-0 right-1/4 w-16 h-16 mb-8">
            <Image src="/placeholder.svg" alt="Profile 4" width={64} height={64} className="rounded-full" />
          </div>
        </div>
      </main>

      {/* Trust Section mit scrollenden Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            The <span className="text-pink-500">Michael Jordan</span> of Accounts
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Trusted by over 500 agencies, resellers, and fan-favorite companies including:
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-48 mx-4">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={150}
                    height={50}
                    className="mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat Button */}
      <button className="fixed bottom-8 right-8 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
        <span className="sr-only">Let&apos;s Chat!</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  )
}
