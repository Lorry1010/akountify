'use client'

import React from 'react'
import { Button } from "@/components/ui/button"

export function PricingPlansComponent() {
  const plans = [
    {
      name: "Basic Account",
      price: "75$",
      features: [
        "Based In Any Location",
        "Manually Warmed Up",
        "Includes Dedicated Proxy",
        "Unique Digital Footprint",
        "Secure Account Access Via Our Dashboard",
        "24 Hour Replacement Guarantee",
        "500+ Connections",
        "100% Customizable",
        "Includes ID (Can Complete Identity Verification)"
      ]
    },
    {
      name: "Premium Account",
      price: "125$",
      features: [
        "Includes Sales Nav",
        "Based In Any Location",
        "Manually Warmed Up",
        "Includes Dedicated Proxy",
        "Unique Digital Footprint",
        "Secure Account Access Via Our Dashboard",
        "24 Hour Replacement Guarantee",
        "500+ Connections",
        "100% Customizable",
        "Includes ID (Can Complete Identity Verification)"
      ]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Flexible <span className="text-pink-500">Pricing Plans</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className="bg-white p-8 rounded-3xl shadow-lg flex-1 max-w-md transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-normal mb-4 text-center">{plan.name}</h3>
                <p className="text-pink-500 text-6xl font-bold text-center mb-1">{plan.price}</p>
                <p className="text-pink-500 text-xl text-center mb-8">Per Month</p>
                <div className="w-full h-px bg-gray-200 mb-8"></div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-black mr-2 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                className="w-full bg-pink-500 text-white hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition-colors duration-300 rounded-full py-6 text-xl font-semibold"
              >
                Subscribe →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
