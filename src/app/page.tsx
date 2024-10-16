import { LandingPageComponent } from '@/components/landing-page'
import { WhyChooseAkountifySectionComponent } from '@/components/why-choose-akountify-section'
import { DeployOutreachArmySectionComponent } from '@/components/deploy-outreach-army-section'
import { AccountComparisonTableComponent } from '@/components/account-comparison-table'

export default function Home() {
  return (
    <>
      <LandingPageComponent />
      <WhyChooseAkountifySectionComponent />
      <DeployOutreachArmySectionComponent />
      <AccountComparisonTableComponent />
    </>
  )
}
