import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=''>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MarketingLayout
