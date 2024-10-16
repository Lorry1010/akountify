'use client'

import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"

export function CalculateSuccessComponent() {
  const [accounts, setAccounts] = useState(1)

  const calculateResults = (accounts: number) => {
    const additionalReach = accounts * 400
    const estimatedLeads = Math.round(additionalReach * 0.03)
    return { additionalReach, estimatedLeads }
  }

  const { additionalReach, estimatedLeads } = calculateResults(accounts)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-pink-500">Calculate</span> Your Success
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Use our interactive calculator to estimate the number of leads and meetings you can achieve with Akountify.
        </p>

        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-center text-pink-500 mb-6">
              Potential Leads Calculator
            </h3>
            <div className="mb-8">
              <label htmlFor="accounts" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Accounts:
              </label>
              <Slider
                id="accounts"
                min={1}
                max={100}
                step={1}
                value={[accounts]}
                onValueChange={(value) => setAccounts(value[0])}
                className="w-full"
              />
              <span className="block text-right mt-2">{accounts}</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Results</h4>
              <p className="mb-2">Additional Reach: {additionalReach}</p>
              <p>Estimated Leads: {estimatedLeads}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
