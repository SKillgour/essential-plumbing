import EpServices from '@/components/ep/EpServices'
import EpCTA from '@/components/ep/EpCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Essential Plumbing + Gas Services',
  description: 'General plumbing, gas fitting, bathroom renovations, hot water systems, leak repairs and caravan certification in Palmerston North.',
}

export default function ServicesPage() {
  return (
    <main>
      <section className="ep-page-hero">
        <div className="container ep-page-hero__inner">
          <p className="ep-eyebrow">What We Do</p>
          <h1 className="ep-page-hero__heading">Our Services</h1>
          <p className="ep-page-hero__sub">
            Quality plumbing and gas services for homes and renovations across Palmerston North.
          </p>
        </div>
      </section>
      <EpServices />
      <EpCTA />
    </main>
  )
}
