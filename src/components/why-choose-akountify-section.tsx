'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function WhyChooseAkountifySectionComponent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-pink-500">Akountify</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Akountify is the #1 source for renting <strong>real accounts</strong> that can <strong>bypass ID verification</strong>, allowing agencies to ridiculously scale their outreach campaigns and book more appointments in the process - all without worrying about any annoying restrictions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our services, processes, and know-how are being used by every reseller in the game, making us the main players in the account renting space. In other words, we got you covered.
            </p>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition duration-300 flex items-center">
              Book a Call
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-pink-200 rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Akountify Team Member"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md p-3 flex items-center">
              <Image
                src="/placeholder.svg"
                alt="Sarah"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-sm">Sarah has booked an appointment.</p>
                <p className="text-xs text-gray-500">2min ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}