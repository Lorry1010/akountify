import { LandingPageComponent } from '@/components/landing-page'
import { WhyChooseAkountifySectionComponent } from '@/components/why-choose-akountify-section'
import { DeployOutreachArmySectionComponent } from '@/components/deploy-outreach-army-section'
import { AccountComparisonTableComponent } from '@/components/account-comparison-table'
import { ScalingOutreachStepsSectionComponent } from '@/components/scaling-outreach-steps-section'
import { CalculateSuccessComponent } from '@/components/calculate-success'
import { PricingPlansComponent } from '@/components/pricing-plans'
import { TestimonialsComponent } from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <LandingPageComponent />
      <WhyChooseAkountifySectionComponent />
      <DeployOutreachArmySectionComponent />
      <AccountComparisonTableComponent />
      <ScalingOutreachStepsSectionComponent />
      <CalculateSuccessComponent />
      <PricingPlansComponent />
      <TestimonialsComponent />
    </>
  )
}
