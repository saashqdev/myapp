import { AnimatedBeamSection } from '@/components/home/animated-beam'
import { FeatureSection } from '@/components/home/cards'
import CtaSection from '@/components/home/cta'
import FaqSection from '@/components/home/faqs'
import { HeroSection } from '@/components/home/hero'
import TestimonialSection from '@/components/home/testimonial'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AnimatedBeamSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}

export default HomePage
