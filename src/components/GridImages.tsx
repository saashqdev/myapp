import Image from 'next/image'
import React from 'react'

const GridImages = ({imagePaths}:{imagePaths:string[]}) => {
  return (
    <div className='not-prose grid grid-cols-1 md:grid-cols-2 gap-4'>
     {imagePaths?.map((path,index)=>( <Image key={index}
        src={path}
        alt='hero template'
        width={500}
        height={500}
        className='h-44 w-full rounded-lg object-cover shadow-lg lg:h-60'
      />))}
    </div>
  )
}

export default GridImages
