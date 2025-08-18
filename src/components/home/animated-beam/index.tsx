'use client'

import Logo from '../../../../public/images/intake.png'
import Image from 'next/image'
import React, { forwardRef, useRef } from 'react'

import { AnimatedBeam } from '@/components/common/AnimatedBeamProps'
import { cn } from '@/utils/util'

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full border border-border bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className,
      )}>
      {children}
    </div>
  )
})

Circle.displayName = 'Circle'

export function AnimatedBeamSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div className='mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8'>
      <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-7xl'>
        Seamless Integrations for Effortless Workflows
      </h1>
      <div
        className='relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10'
        ref={containerRef}>
        <div className='flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10'>
          <div className='flex flex-row items-center justify-between'>
            <Circle ref={div1Ref}>
              <Icons.github />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.letsencrypt />
            </Circle>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <Circle ref={div2Ref}>
              <Icons.rabbitmq />
            </Circle>
            <Circle ref={div4Ref} className='size-16'>
              <Icons.inTake />
            </Circle>
            <Circle ref={div6Ref}>
              <Icons.mongodb />
            </Circle>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <Circle ref={div3Ref}>
              <Icons.redis />
            </Circle>
            <Circle ref={div7Ref}>
              <Icons.postgres />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
      </div>
    </div>
  )
}

const Icons = {
  github: () => (
    <svg
      height='100'
      aria-hidden='true'
      viewBox='0 0 24 24'
      version='1.1'
      width='100'
      fill='#fff'
      data-view-component='true'
      className='octicon octicon-mark-github v-align-middle'>
      <path d='M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z'></path>
    </svg>
  ),
  inTake: () => <Image src={Logo} alt='inTake logo' height={30} width={30} />,
  mongodb: () => (
    <svg
      viewBox='0 0 256 549'
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      preserveAspectRatio='xMidYMid'
      className='size-5'>
      <path
        fill='#01EC64'
        d='M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z'></path>
    </svg>
  ),
  letsencrypt: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='100'
      viewBox='.58270974 .25870974 63.77358058 67.21369903'
      className='size-5'
      width='100'>
      <g fill='none'>
        <path
          d='m46.489 36.568h-8.04v-4.128a5.986 5.986 0 0 0 -5.98-5.979 5.986 5.986 0 0 0 -5.979 5.979v4.128h-8.04v-4.128c0-7.73 6.289-14.02 14.02-14.02s14.02 6.289 14.02 14.02v4.128z'
          fill='#f9a11d'></path>
        <path
          d='m49.732 36.568h-34.525a2.688 2.688 0 0 0 -2.68 2.68v25.54a2.688 2.688 0 0 0 2.68 2.68h34.525a2.688 2.688 0 0 0 2.68-2.68v-25.54a2.688 2.688 0 0 0 -2.68-2.68zm-15.513 16.769v3.461a1.75 1.75 0 0 1 -3.498 0v-3.46a3.552 3.552 0 1 1 3.498-.001z'
          fill='#2c3c69'></path>
        <path
          d='m11.707 32.76h-8.331a2.446 2.446 0 1 1 0-4.892h8.331a2.446 2.446 0 1 1 0 4.892zm5.868-13.105a2.433 2.433 0 0 1 -1.552-.557l-6.59-5.419a2.446 2.446 0 0 1 3.108-3.779l6.59 5.419a2.446 2.446 0 0 1 -1.556 4.336zm14.894-5.76a2.446 2.446 0 0 1 -2.446-2.446v-8.397a2.446 2.446 0 1 1 4.892 0v8.397a2.446 2.446 0 0 1 -2.446 2.446zm14.894 5.76a2.447 2.447 0 0 1 -1.556-4.336l6.59-5.419a2.447 2.447 0 0 1 3.108 3.779l-6.59 5.419c-.437.36-.986.558-1.552.557zm14.2 13.105h-8.41a2.446 2.446 0 1 1 0-4.892h8.41a2.446 2.446 0 1 1 0 4.892z'
          fill='#f9a11d'></path>
      </g>
    </svg>
  ),
  rabbitmq: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='100'
      viewBox='0 0 256 271'
      preserveAspectRatio='xMidYMid'
      className='size-5'>
      <path
        d='M245.44 108.308h-85.09a7.738 7.738 0 0 1-7.735-7.734v-88.68C152.615 5.327 147.29 0 140.726 0h-30.375c-6.568 0-11.89 5.327-11.89 11.894v88.143c0 4.573-3.697 8.29-8.27 8.31l-27.885.133c-4.612.025-8.359-3.717-8.35-8.325l.173-88.241C54.144 5.337 48.817 0 42.24 0H11.89C5.321 0 0 5.327 0 11.894V260.21c0 5.834 4.726 10.56 10.555 10.56H245.44c5.834 0 10.56-4.726 10.56-10.56V118.868c0-5.834-4.726-10.56-10.56-10.56zm-39.902 93.233c0 7.645-6.198 13.844-13.843 13.844H167.69c-7.646 0-13.844-6.199-13.844-13.844v-24.005c0-7.646 6.198-13.844 13.844-13.844h24.005c7.645 0 13.843 6.198 13.843 13.844v24.005z'
        fill='#F60'></path>
    </svg>
  ),
  redis: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 256 220'
      width='100'
      height='100'
      className='size-5'>
      <path
        d='M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9'
        fill='#912626'></path>
      <path
        d='M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16'
        fill='#C6302B'></path>
      <path
        d='M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9'
        fill='#912626'></path>
      <path
        d='M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16'
        fill='#C6302B'></path>
      <path
        d='M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9'
        fill='#912626'></path>
      <path
        d='M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16'
        fill='#C6302B'></path>
      <path
        d='m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2'
        fill='#FFF'></path>
      <path d='M185.3 36 220 49.8l-34.8 13.7V36' fill='#621B1C'></path>
      <path
        d='M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8'
        fill='#9A2928'></path>
    </svg>
  ),
  postgres: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 256 264'
      width='100'
      height='100'
      className='size-5'>
      <path d='M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26'></path>
      <path
        d='M238 161c-30 6-32-4-32-4 32-47 45-106 33-120-31-40-84-21-85-21l-20-2c-14 0-24 4-32 10 0 0-95-40-91 49 1 19 28 143 59 106l22-26c6 4 12 6 19 5h1v5c-8 9-6 10-22 14-16 3-7 9 0 11s25 4 36-12v2c3 2 5 16 5 29-1 12-1 21 2 27 2 7 5 22 26 18 17-4 27-14 28-30 1-12 3-10 3-20l1-5c2-16 1-21 12-19l2 1c8 0 19-2 25-5 13-6 21-16 8-13'
        fill='#336791'></path>
      <path
        d='M108 82h-6l-1 2 1 3c1 2 3 3 5 3h1c3 0 6-2 6-4 1-2-3-4-6-4M197 82c0-2-4-3-7-2-3 0-6 1-6 3 1 2 3 4 6 4h1l4-2 2-3'
        fill='#FFF'></path>
      <path
        d='M248 160c-1-3-5-5-11-3-18 3-24 1-27-1 14-21 26-47 32-71 3-11 5-22 5-30 0-10-2-17-5-21a70 70 0 0 0-57-27c-16 0-30 4-33 6-5-2-12-3-18-3-13 0-23 3-32 9-4-2-14-5-26-7-21-3-37-1-49 8C13 30 6 48 8 73c0 8 5 35 13 60 10 33 21 51 32 55l5 1c4 0 9-2 14-9l21-22c4 2 9 3 14 3v1l-2 3c-4 5-5 5-16 8-3 0-12 2-12 8 0 7 10 10 11 10l12 1c9 0 17-3 24-8-1 23 0 46 3 53 3 6 8 20 26 20l9-1c18-4 26-12 29-30l6-45 11 1c8 0 17-2 23-5 7-3 19-10 17-17Zm-44-83-1 10-2 12 1 14c1 9 3 19-2 28l-2-4-3-6c-7-12-22-39-14-50 2-3 8-6 23-4Zm-18-62c21 0 38 8 50 23 9 12-1 65-30 111l-1-1c7-13 6-25 5-36l-1-13 1-11a72 72 0 0 0 1-16c0-5-6-20-18-34-6-7-16-16-28-21l21-2ZM67 176c-6 7-10 6-12 5-8-3-19-21-27-51-8-25-13-50-13-57-1-23 4-39 16-47 20-14 52-6 64-2v1C74 46 74 82 74 85v3c1 7 2 18 0 31a38 38 0 0 0 12 34l-19 23Zm22-30c-6-7-9-16-8-26 2-14 1-26 1-32v-2c3-3 17-11 27-8 5 1 8 4 9 9 6 28 1 40-4 50l-2 5-1 2-3 10c-7 0-14-3-19-8Zm1 38-5-2 6-2c13-3 15-5 19-10l4-5c3-3 4-2 6-1 1 0 3 2 4 5l-1 4c-9 13-23 13-33 11Zm70 65c-16 3-22-5-26-15a293 293 0 0 1-3-67c-2-5-5-9-8-10-2-1-5-2-8-1l3-10 1-1 2-5c5-10 11-24 4-54-2-12-11-17-23-16a54 54 0 0 0-20 7c1-12 5-33 18-47 9-8 20-13 34-12 27 0 44 14 54 26 8 10 13 20 15 25-14-1-23 1-28 8-10 15 6 44 13 57l3 6 8 13 2 2c-4 2-11 4-11 18l-6 51c-3 16-8 21-24 25Zm68-78c-4 2-11 3-18 3-8 1-11 0-12-1-1-9 3-10 6-11h2l1 1c6 4 16 4 31 1h1l-11 7Z'
        fill='#FFF'></path>
    </svg>
  ),
}
