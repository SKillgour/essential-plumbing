import { EpIntroProvider } from '@/components/ep/EpIntroContext'
import EpIntro from '@/components/ep/EpIntro'
import EpNav from '@/components/ep/EpNav'
import EpFooter from '@/components/ep/EpFooter'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <EpIntroProvider>
      <EpIntro />
      <EpNav />
      {children}
      <EpFooter />
    </EpIntroProvider>
  )
}
