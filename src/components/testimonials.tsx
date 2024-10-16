'use client'

import React from 'react'
import Image from 'next/image'

const testimonials = [
  {
    text: "Akountify has been a game-changer for our outreach campaigns, giving us an incredible daily reach we once thought impossible on. Currently have 50 rented accounts reaching about 30,000 decision-makers every month for our PR firm and certainly planning on getting more with how good things are going!",
    name: "Neema Khaled",
    position: "Head of Marketing",
    company: "@ Mogul Press",
    image: "/placeholder.svg"
  },
  {
    text: "I used to burn thousands every month on fake accounts that kept getting permanently banned. It was so ugly that I almost gave up on my outreach entirely. Thankfully, I got introduced to Akountify by a fellow agency owner and the rest is history. Akountify saved my outbound campaigns.",
    name: "Brian Kamp",
    position: "CEO and Founder",
    company: "@ Kamp Consulting",
    image: "/placeholder.svg"
  },
  {
    text: "As an agency owner, I was looking for an effective solution to boost my outreach. Akountify's Basic Plan has been perfect for my needs. The verified profiles are real and active, and the customer support is top-notch. I've seen a noticeable improvement in my engagement. Highly satisfied with the service!",
    name: "Nathan Peters",
    position: "CEO and Founder",
    company: "@ Sales Utopia",
    image: "/placeholder.svg"
  }
]

export function TestimonialsComponent() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Hear from Our <span className="text-pink-500">Satisfied Clients</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-pink-500 text-6xl font-serif mb-4">"</div>
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div className="mt-auto flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Book a <span className="text-pink-500">Discovery Call</span>
            </h3>
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300">
              Let's Chat!
            </button>
          </div>
        </div>
      </section>
    )
  }


