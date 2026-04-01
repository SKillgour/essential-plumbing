import EpHero from '@/components/ep/EpHero'
import EpStats from '@/components/ep/EpStats'
import EpServices from '@/components/ep/EpServices'
import EpGallery from '@/components/ep/EpGallery'
import EpCaravan from '@/components/ep/EpCaravan'
import EpTestimonials from '@/components/ep/EpTestimonials'
import EpCTA from '@/components/ep/EpCTA'

export default function HomePage() {
  return (
    <main>
      <EpHero />
      <EpStats />
      <EpServices />
      <EpGallery />
      <EpCaravan />
      <EpTestimonials />
      <EpCTA />
    </main>
  )
}
