'use client'

import createGlobe from 'cobe'
import { Check } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function AboutFeaturesSection() {
  return (
    <div className='relative z-20 mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8'>
      <div className='relative flex flex-col-reverse items-center justify-center gap-12 md:flex-row'>
        {/* Left Content */}
        <div className='max-w-lg'>
          <h2 className='bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text pb-3 text-3xl font-semibold text-transparent'>
            Why Choose inTake?
          </h2>
          <ul className='space-y-5 text-lg text-gray-200'>
            {[
              'Deploy your projects in just a few clicks with minimal setup.',
              'Ensure smooth and reliable performance at any scale.',
              'Use organization-provided themes or upload custom ones.',
              'Reduce manual effort with streamlined deployment pipelines.',
              'Works with your favorite tools and frameworks.',
            ].map((text, index) => (
              <li
                key={index}
                className='flex items-center justify-center gap-3 md:justify-start'>
                <Check className='text-purple-500' />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Globe */}
        <div className='flex w-full max-w-[400px] justify-center md:max-w-[500px] lg:max-w-[600px]'>
          <Globe className='h-auto w-full' />
        </div>
      </div>
    </div>
  )
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.4, 0.3, 0.8],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: state => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '600px',
        aspectRatio: 1,
      }}
      className={className}
    />
  )
}
