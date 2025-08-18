import client_1 from '/public/images/clients/client_1.png'
import client_2 from '/public/images/clients/client_2.png'
import client_3 from '/public/images/clients/client_3.png'
import client_4 from '/public/images/clients/client_4.png'
import client_5 from '/public/images/clients/client_5.png'
import client_6 from '/public/images/clients/client_6.png'
import client_7 from '/public/images/clients/client_7.png'
import client_8 from '/public/images/clients/client_8.png'
import Image, { StaticImageData } from 'next/image'

import { Marquee } from '@/components/common/Marquee'
import { cn } from '@/utils/util'

const clients = [
  { src: client_1, alt: 'Client 1' },
  { src: client_2, alt: 'Client 2' },
  { src: client_3, alt: 'Client 3' },
  { src: client_4, alt: 'Client 4' },
  { src: client_5, alt: 'Client 5' },
  { src: client_6, alt: 'Client 6' },
  { src: client_7, alt: 'Client 7' },
  { src: client_8, alt: 'Client 8' },
]


const ClientCard = ({ src, alt }: { src: string | StaticImageData; alt: string }) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}>
      <div className='relative h-20 w-32'>
        <Image
          src={src}
          alt={alt}
          fill
          className='object-contain'
        />
      </div>
    </figure>
  )
}

export function ClientSection() {
  return (
    <div className='relative flex max-w-7xl mx-auto flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-6 lg:px-8'>
        <h2 className='pb-5 text-center text-lg font-semibold'>
        Powering Teams Around the World
      </h2>
      <Marquee pauseOnHover className='[--duration:35s]'>
        {clients.map((client, index) => (
          <ClientCard key={index} {...client} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:35s]'>
        {clients.map((client,index) => (
          <ClientCard key={index} {...client} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background'></div>
    </div>
  )
}
