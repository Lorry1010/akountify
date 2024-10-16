'use client'

import { MessageSquare, CheckCircle, DollarSign, Sliders } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-pink-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export function DeployOutreachArmySectionComponent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Deploy Your Own <span className="text-pink-500">Outreach Army</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Our goal is to help companies solve the "scalability" problem by providing stable accounts they can use over the longterm.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<MessageSquare size={48} />}
            title="Ongoing Support"
            description="We open a Slack support channel where you will always have access to our team and your dedicated account manager. The support channel is open 24/7."
          />
          <FeatureCard
            icon={<CheckCircle size={48} />}
            title="ID Verified"
            description="Our accounts belong to real humans with real government-issued IDs we can use to successfully bypass ID verification and restrictions."
          />
          <FeatureCard
            icon={<DollarSign size={48} />}
            title="Best Pricing"
            description="Since we are the source of accounts we also have the best prices in the game, both starting and at bulk. We are ahead of the game by a country mile."
          />
          <FeatureCard
            icon={<Sliders size={48} />}
            title="Easy Setup"
            description="Our accounts are easy to setup and fully customizable. We take care of everything: from proxies, multi login software, account modifications, connecting them to your automation tool, etc."
          />
        </div>
      </div>
      <button className="fixed bottom-8 right-8 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
        <span className="sr-only">Let's Chat!</span>
        <MessageSquare className="h-6 w-6" />
      </button>
    </section>
  )
}