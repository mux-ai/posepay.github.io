import { HeroSection } from '@/components/hero-section'
import { DemoSection } from '@/components/demo-section'
import { FeaturesSection } from '@/components/features-section'
import { TargetAudienceSection } from '@/components/target-audience-section'
import { PlatformSection } from '@/components/platform-section'
import { WaitlistSection } from '@/components/waitlist-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <PlatformSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}