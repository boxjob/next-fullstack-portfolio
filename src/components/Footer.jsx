import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex items-center justify-between py-4'>
        <div className='text-xs'>©2023 Boxjob. All rights reserved.</div>
        <div className='flex gap-3'>
            <Image src='/1.png' width={15} height={15} alt='Boxjob Dev Facebook Account'/>
            <Image src='/2.png' width={15} height={15} alt='Boxjob Dev'/>
            <Image src='/3.png' width={15} height={15} alt='Boxjob Dev'/>
            <Image src='/4.png' width={15} height={15} alt='Boxjob Dev'/>
        </div>
    </div>
  )
}
