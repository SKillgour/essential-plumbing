import EpCaravan from '@/components/ep/EpCaravan'
import EpCTA from '@/components/ep/EpCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caravan & Motorhome Certification | Essential Plumbing + Gas Services',
  description: 'Registered Self Containment Authority in Palmerston North. Green sticker certification, gas cert and Worksafe lodgement for caravans and motorhomes.',
}

export default function CaravanPage() {
  return (
    <main>
      <section className="ep-page-hero">
        <div className="container ep-page-hero__inner">
          <p className="ep-eyebrow">Registered Self Containment Authority</p>
          <h1 className="ep-page-hero__heading">Caravan &amp; Motorhome Certification</h1>
          <p className="ep-page-hero__sub">
            End-to-end self-containment certification for caravans and motorhomes. Green sticker, gas cert and Worksafe lodgement — all handled by us.
          </p>
          <a href="/contact" className="ep-btn ep-btn--primary">Book an Inspection</a>
        </div>
      </section>
      <EpCaravan />
      <EpCTA />
    </main>
  )
}
