import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <div className='w-7xl mx-auto mb-10'>
      <h1 className='font-black text-5xl text-center mb-10'>Let's Keep in Touch</h1>
      <div className='grid grid-cols-2 gap-24 items-center'>
        <div>
          <Image src='/contact.png' width={500} height={500} alt=''/>
        </div>
        <div className='max-w-xl'>
          <form action="" className='flex flex-col space-y-4'>
            <input type="text" name='name' placeholder='Name' className='border outline-none px-3 py-2' />
            <input type="email" name='email' placeholder='E-mail' className='border outline-none px-3 py-2' />
            <textarea name="message" rows={6} className='border resize-none px-3 py-2 outline-none' placeholder='Message'></textarea>
            <button className="bg-[#53C38B] w-fit px-4 py-3 rounded text-white text-sm hover:text-[#111] transition-colors duration-300 cursor-pointer">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
