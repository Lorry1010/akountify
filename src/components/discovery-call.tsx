'use client'

import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function DiscoveryCallComponent() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Ready to take your outbound campaigns to the next level? Schedule a discovery call with our experts to learn how Akountify can help you achieve your goals.
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-1/3 bg-gray-100">
              <div className="mb-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-800">
                  <path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Akountify</h3>
              <h4 className="text-xl font-semibold mb-4">Discovery Call</h4>
              <p className="flex items-center text-gray-600 mb-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6h6v-2h-4V7z"/>
                </svg>
                20 min
              </p>
              <p className="flex items-center text-gray-600 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
                Web conferencing details provided upon confirmation.
              </p>
              <p className="text-sm text-gray-600">
                Akountify delivers ID-backed accounts you can use to scale your outreach. We are happy to answer as many questions as you have.
              </p>
            </div>
            <div className="p-8 md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">Select a Date & Time</h3>
              <div className="mb-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Time zone</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Central European Time (08:58)</option>
                </select>
              </div>
              <Button variant="link" className="text-blue-600 hover:text-blue-800">
                Cookie settings
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
          Let's Chat!
        </Button>
      </div>
    </section>
  )
}
