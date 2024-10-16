'use client'

import { MessageSquare } from 'lucide-react'

interface StepProps {
  number: number
  title: string
  description: string
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export function ScalingOutreachStepsSectionComponent() {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Book A Call",
      description: "We will get you know your company and answer as many questions as you have before getting started."
    },
    {
      number: 2,
      title: "Online Payment",
      description: "You will activate your subscription by paying online. Once you do, you will be invited to join our shared support channel in Slack."
    },
    {
      number: 3,
      title: "Onboarding",
      description: "We will you access to the accounts, their proxies, login informations, and a best practices guide that will help you keep them safe."
    },
    {
      number: 4,
      title: "Done",
      description: "You are now ready to use your accounts and start any outreach or scraping campaigns on them."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-pink-500">Scaling Outbound Outreach</span> Has Never Been This Easy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
      <button className="fixed bottom-8 right-8 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
        <span className="sr-only">Let's Chat!</span>
        <MessageSquare className="h-6 w-6" />
      </button>
    </section>
  )
}