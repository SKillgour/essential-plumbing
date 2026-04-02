import { EpIntroProvider } from '@/components/ep/EpIntroContext'
import EpIntro from '@/components/ep/EpIntro'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <EpIntroProvider>
      <EpIntro />
      {children}
    </EpIntroProvider>
  )
}
