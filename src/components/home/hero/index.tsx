'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Spotlight } from '@/components/SpotLight'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/util'

export function HeroSection() {
  const router = useRouter()
  return (
    <div className='bg-grid-white/[0.02] relative mx-auto flex h-[32rem] max-w-7xl flex-col items-center justify-center overflow-hidden rounded-md px-4 antialiased sm:h-[40rem] md:px-6 lg:px-8'>
      <Spotlight
        className='-top-40 left-0 sm:-top-20 sm:left-40 md:left-60'
        fill='#7F55E2'
      />
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

      <div className='relative z-10 mx-auto w-full pt-20 text-center sm:pt-28'>
        <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl md:text-7xl'>
          Effortless <br /> Deployments in Minutes
        </h1>
        <p className='mx-auto mt-4 max-w-lg text-base font-normal text-muted-foreground sm:text-lg'>
          Deploy your applications seamlessly with inTake. Fast, scalable, and
          developer-friendly.
        </p>
        <div>
          <div className='mt-6 flex items-center justify-center gap-4'>
            <Button
              asChild
              className='animate-shimmer bg-[linear-gradient(110deg,#6B44C2,45%,#7F55E2,55%,#6B44C2)] bg-[length:200%_100%]'>
              <Link href={'https://demo.gointake.ca'} target='_blank'>
                View Demo
              </Link>
            </Button>
            <Button
              onClick={() => router.push('https://discord.gg/EFHuanDbHQ')}
              variant='outline'
              className='flex items-center gap-2 hover:bg-card hover:text-foreground'>
              <svg
                role='img'
                className='h-6 w-6 fill-white'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z'></path>
              </svg>
              Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
