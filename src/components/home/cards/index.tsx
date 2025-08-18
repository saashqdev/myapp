'use client'

import React, { useId } from 'react'

const grid = [
  {
    title: 'Project Management',
    description:
      'Create and manage projects effortlessly. Deploy projects with a streamlined workflow.',
  },
  {
    title: 'Service Deployment',
    description:
      'Create and manage services within projects. Deploy services with minimal configuration.',
  },
  {
    title: 'Server Management',
    description:
      'Initialize and configure servers. Manage multiple servers efficiently.',
  },
  {
    title: 'Plugins Support',
    description:
      'Extend functionality with plugins. Enable and disable plugins as needed.',
  },
  {
    title: 'Domains Management',
    description:
      'Attach and manage custom domains. Configure domain settings easily.',
  },
  {
    title: 'Monitoring & Logs',
    description:
      'Track deployment logs and service health. View real-time monitoring stats.',
  },
  {
    title: 'SSH Key Management',
    description:
      'Add and manage SSH keys securely. Enable secure authentication for deployments.',
  },
  {
    title: 'GitHub Integration',
    description:
      'Deploy applications directly from GitHub repositories. Automate deployments with GitHub Actions.',
  },
]

export function FeatureSection() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8'>
      <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-7xl'>
        Why Choose inTake?
      </h1>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
        {grid.map((feature, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-md bg-card p-6'>
            <Grid size={20} />
            <p className='relative z-20 text-lg font-medium'>{feature.title}</p>
            <p className='relative z-20 mt-4 text-muted-foreground'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: [number, number][]
  size?: number
}) => {
  const p: [number, number][] =
    pattern ??
    Array.from({ length: 5 }, () => [
      Math.floor(Math.random() * 4) + 7,
      Math.floor(Math.random() * 6) + 1,
    ])

  return (
    <div className='pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]'>
      <div className='absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]'>
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x={-12}
          y={4}
          squares={p}
          className='absolute inset-0 h-full w-full fill-white/10 stroke-white/10 mix-blend-overlay'
        />
      </div>
    </div>
  )
}

type GridPatternProps = React.SVGProps<SVGSVGElement> & {
  width: number
  height: number
  x?: number
  y?: number
  squares?: [number, number][]
}

export function GridPattern({
  width,
  height,
  x = 0,
  y = 0,
  squares = [],
  ...props
}: GridPatternProps) {
  const patternId = useId()

  // Ensure uniqueness of square coordinates
  const uniqueSquares = Array.from(
    new Set(squares.map(([sx, sy]) => `${sx}-${sy}`)),
  ).map(key => key.split('-').map(Number) as [number, number])

  return (
    <svg aria-hidden='true' {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
          x={x}
          y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill='none' />
        </pattern>
      </defs>
      <rect
        width='100%'
        height='100%'
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {uniqueSquares.length > 0 && (
        <svg x={x} y={y} className='overflow-visible'>
          {uniqueSquares.map(([squareX, squareY]) => (
            <rect
              strokeWidth='0'
              key={`${squareX}-${squareY}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}
