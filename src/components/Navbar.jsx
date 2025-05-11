import Link from 'next/link'
import React from 'react'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

export const Navbar = () => {
  return (
    <div className='h-[140px] flex justify-between items-center'>
        <Link className='font-bold text-xl' href='/'>BOXJOB</Link>
        <nav className='flex items-center gap-4'>
           {links.map( item => 
            <Link 
                key={ item.id } 
                href={ item.url }
                className='font-semibold'
            >
                { item.title }
            </Link>
           )}
           <button className='px-2 py-1 bg-[#53C38B] rounded text-white font-semibold'>Logout</button> 
        </nav>
    </div>
  )
}
