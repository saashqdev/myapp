export default function Footer() {
  return (
    <footer className='mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8'>
      <div className='container mx-auto flex flex-col items-center justify-between px-6 md:flex-row'>
        <p className='text-sm'>&copy; 2025 inTake. All rights reserved.</p>
        <nav className='mt-2 flex space-x-4 md:mt-0'>
          <a
            href='/privacy'
            className='text-sm font-medium transition duration-150 ease-in-out hover:text-primary'>
            Privacy Policy
          </a>
          <a
            href='/terms'
            className='text-sm font-medium transition duration-150 ease-in-out hover:text-primary'>
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  )
}
