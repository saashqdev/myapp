'use client'

import Logo from '../../public/images/intake.png'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { cn } from '@/utils/util'

import { Button } from './ui/button'

export function Navbar({ className }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-menu')
      const button = document.getElementById('menu-button')

      if (
        menuOpen &&
        menu &&
        button &&
        !menu.contains(e.target as Node) &&
        !button.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [menuOpen])

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl bg-background/60 px-4 pt-5 backdrop-blur-md md:px-6 lg:px-8',
        className,
      )}>
      <nav className='relative flex items-center justify-between rounded-md border border-border bg-background px-8 py-3 shadow-input'>
        {/* Logo */}
        <Link
          href={'/'}
          className='flex items-center gap-2 text-2xl font-semibold'>
          <Image src={Logo} alt={'inTake Logo'} height={40} width={40} />
          <p>inTake</p>
        </Link>

        {/* Desktop Links */}
        <div className='hidden flex-1 justify-center gap-5 md:flex'>
          <Link
            href={'/docs'}
            className='text-sm font-medium transition duration-150 ease-in-out hover:text-primary'>
            Docs
          </Link>
          <Link
            href={'/about'}
            className='text-sm font-medium transition duration-150 ease-in-out hover:text-primary'>
            About
          </Link>
        </div>

        {/* Right Side (Discord + Sign In) */}
        <div className='hidden items-center gap-2 md:flex'>
          <Button
            onClick={() => router.push('https://discord.gg/EFHuanDbHQ')}
            variant={'outline'}
            className='hover:bg-card hover:text-foreground'>
            Discord
          </Button>
          <Button
            asChild
            className='animate-shimmer bg-[linear-gradient(110deg,#6B44C2,45%,#7F55E2,55%,#6B44C2)] bg-[length:200%_100%]'>
            <Link href={'https://demo.gointake.ca'} target='_blank'>
              View Demo
            </Link>
          </Button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          id='menu-button'
          onClick={() => setMenuOpen(prev => !prev)}
          className='relative z-50 md:hidden'>
          {menuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id='mobile-menu'
          className='absolute left-0 top-full flex w-full flex-col items-center space-y-4 rounded-md border border-border bg-background p-5 shadow-md md:hidden'>
          <Link href='/' onClick={() => setMenuOpen(false)}>
            Docs
          </Link>
          <Link href='/about' onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Button
            onClick={() => router.push('https://discord.gg/EFHuanDbHQ')}
            variant={'outline'}
            className='w-full'>
            Discord
          </Button>
          <Button
            asChild
            className='w-full animate-shimmer bg-[linear-gradient(110deg,#6B44C2,45%,#7F55E2,55%,#6B44C2)] bg-[length:200%_100%]'>
            <Link href={'https://demo.gointake.ca'} target='_blank'>
              View Demo
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
