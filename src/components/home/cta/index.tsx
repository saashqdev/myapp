import Link from 'next/link'

import { Button } from '@/components/ui/button'

const CtaSection = () => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-16 text-center md:px-6 lg:px-8'>
      <h1 className='max-w-4xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'>
        Deploy Smarter with inTake
      </h1>
      {/* <h2 className="text-4xl font-bold">
        Deploy Smarter with inTake
      </h2> */}
      <p className='max-w-lg text-lg text-muted-foreground'>
        Effortless, fast, and reliable deployments for modern applications. Get
        started today and streamline your development workflow.
      </p>
      <Button
        asChild
        className='animate-shimmer bg-[linear-gradient(110deg,#6B44C2,45%,#7F55E2,55%,#6B44C2)] bg-[length:200%_100%]'>
        <Link href={'https://demo.gointake.ca'} target='_blank'>
          View Demo
        </Link>
      </Button>
    </div>
  )
}

export default CtaSection
