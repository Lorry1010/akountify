'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">support@akountify.ai</p>
            <p className="text-gray-600">+34 711 044 328</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-600">Avenida Doctor Esquerdo 10, 4C</p>
            <p className="text-gray-600">(Madrid, Spain)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Relevant Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/affiliate-program" className="text-gray-600 hover:underline">Affiliate Program</Link>
              <Link href="/blog" className="text-gray-600 hover:underline">Blog</Link>
              <Link href="/overlead" className="text-gray-600 hover:underline">Overlead - Lead Gen Platform</Link>
              <Link href="/terms" className="text-gray-600 hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>© 2024 by Akountify - All Rights Reserved</p>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-100 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </footer>
  )
}
