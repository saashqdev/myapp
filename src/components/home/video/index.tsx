import { VideoDialog } from '@/components/common/VideoDialog'

export function VideoDialogSection() {
  const videoId = 'uOGmj7RWZWY' // Extracted from the videoSrc
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className='relative mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8'>
      <h1 className='bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-7xl'>
        Watch & Deploy: Get Started with inTake
      </h1>
      <VideoDialog
        className='block'
        animationStyle='from-center'
        videoSrc={`https://www.youtube.com/embed/${videoId}?si=goLbw3rxKE2qh4qC`}
        thumbnailSrc={thumbnailUrl}
        thumbnailAlt='Hero Video'
      />
    </div>
  )
}
