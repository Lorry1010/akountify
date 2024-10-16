'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactFormComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Hier können Sie die Logik für das Senden des Formulars implementieren
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-pink-500">Contact</span> Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions or need more information? Fill out the contact form below, and one of our representatives will get back to you shortly.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
            <div className="flex gap-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First name *"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last name *"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Message *"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
            />
            <Button type="submit" className="w-full bg-pink-500 text-white hover:bg-pink-600">
              Submit
            </Button>
          </form>
          <div className="w-full md:w-1/2">
            <img
              src="/contact-image.jpg"
              alt="Contact us"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
