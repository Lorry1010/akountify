'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Link } from 'lucide-react'

const faqs = [
  {
    id: '01',
    question: 'What is the difference between a Basic and Premium account.',
    answer: "Basic accounts are ID-verified, warmed up and ready to be used for outreach, scraping, or other activities. These are old, have connections in their network, and a good SSI score. However, Basic accounts DO NOT have Sales Nav. A Premium account has all the features, characteristics, and perks of a Basic account but they also HAVE Sales Nav on them. This allows you to reach more people and scrape profiles with much more advanced filters."
  },
  {
    id: '02',
    question: 'How many connections, messages, or Inmails can I send on them?',
    answer: 'Answer for question 2...'
  },
  {
    id: '03',
    question: 'How do you deliver the accounts and how long does it take.',
    answer: 'Answer for question 3...'
  },
  {
    id: '04',
    question: 'Am I free to edit the profiles as I want?',
    answer: 'Answer for question 4...'
  },
  {
    id: '05',
    question: 'What if my account gets suspended?',
    answer: 'Answer for question 5...'
  },
]

export function FAQComponent() {
  const [openId, setOpenId] = useState('01')

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-500">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                className="w-full text-left flex items-center"
                onClick={() => setOpenId(openId === faq.id ? '' : faq.id)}
              >
                <div className={`w-20 h-20 flex items-center justify-center text-3xl font-bold ${openId === faq.id ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-500'} transition-colors duration-300 hover:bg-pink-200`}>
                  {faq.id}
                </div>
                <div className="flex-grow bg-pink-50 p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    {openId === faq.id ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                  </div>
                </div>
              </button>
              {openId === faq.id && (
                <div className="bg-pink-50 p-6 pt-0">
                  <div className="mt-4 text-gray-700">{faq.answer}</div>
                  {faq.id === '01' && (
                    <button className="mt-4 text-pink-500 hover:text-pink-600 flex items-center">
                      <Link className="w-4 h-4 mr-2" />
                      Link to more info
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
