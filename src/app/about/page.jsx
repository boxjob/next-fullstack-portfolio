import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section className='mb-12'>
      <div className='h-[300px] relative'>
        <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className='object-cover grayscale'
          />
        <div>
          <p>Digital Storytellers</p>
          <p>Handcrafting award winning digital experiences</p>
        </div>
      </div>
      <article className='grid grid-cols-2 gap-12'>
        <div>
          <h1 className='text-3xl my-10 font-black'>Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        
        <div>
          <h1 className='text-3xl my-10 font-black'>What We Do?</h1>
          <p className='mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>

          <Link className="bg-[#53C38B] px-3 py-3 rounded text-white text-sm hover:text-[#111] transition-colors duration-300" href='/contact'>Contact</Link>
        </div>

      </article>
    </section>
  )
}
