'use client'

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

export const DarkMode = () => {
    const { toggle, mode } = useContext( ThemeContext )
  return (
    <div className='w-[45px] h-[25px] p-[3px] flex justify-between border rounded-full relative'>
        <div className='text-[12px] cursor-pointer' onClick={ toggle }>🌙</div>
        <div className='text-[12px] cursor-pointer' onClick={ toggle }>🔆</div>
        <div 
            className={`w-[16px] h-[16px] absolute rounded-full bg-[#53c28b] ${mode === 'light' ? 'left-2px' : 'right-[2px]' } `}
        ></div>
    </div>
  )
}
