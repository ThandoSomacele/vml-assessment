'use client'
import React, { createContext, useContext, useState } from 'react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

    
function SideBarNav() {
    const [showSidebar, setShowSidebar] = useState('translate-x-[100%]');
    const [showBgFilter, setShowBgFilter] = useState('hidden');
    const handleSidebarNav =()=>{
      showSidebar === 'translate-x-[100%]' ? setShowSidebar('translate-x-[0%]') : setShowSidebar('translate-x-[100%]')
      showBgFilter === 'hidden' ? setShowBgFilter('flex') : setShowBgFilter('hidden')
        }
  
  return (
    <>
     <div className='mobile-header md:p-8 p-4 lg:hidden flex justify-between  w-screen' >
       <Link href={'/'}><Image src='/logo.svg' width='84' height='27' alt='snap logo' className='object-contain' /></Link>
        <Image className='object-contain lg:hidden' src='/icons/icon-menu.svg' width='32' height='32' alt='snap logo' onClick={handleSidebarNav} />
      </div>
    <div className={`lg:hidden ${showBgFilter} mobile-bg-filter w-screen h-screen bg-black bg-opacity-70 absolute top-0 right-0 flex justify-end items-start overflow-hidden`} onClick={handleSidebarNav}>
      <div className={`${showSidebar} bg-white w-2/3 h-screen px-6 py-4 flex flex-col justify-start items-end`}>
            {/* <XMarkIcon className='w-10 text-almost_black' /> */}
            <Image className='object-contain lg:hidden' src='/icons/icon-close-menu.svg' width='32' height='32' alt='snap logo' onClick={handleSidebarNav}/>
            <nav className='lg:hidden w-full text-sm py-5 md:px-10 tracking-[0.5px]'>
              <ul className='flex flex-col gap-6 text-medium_gray'>
                <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary href='#' className='flex gap-3 items-center'>
                    Features <Image className='group-open:rotate-180 object-contain' src='/icons/icon-arrow-down.svg' width={11} height={11} alt='dropdown icon'/>
                  </summary>
                  <ul className='px-5 pt-5 flex flex-col gap-5'>
                    <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-todo.svg' width={16} height={16} alt='todo icon'/>Todo List</li>
                    <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-calendar.svg' width={16} height={16} alt='calendar icon'/>Calendar</li>
                    <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-reminders.svg' width={16} height={16} alt='reminders icon'/>Reminders</li>
                    <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-planning.svg' width={16} height={16} alt='planning icon'/>Planning</li>
                  </ul>
                  </details>
                </li>
                <li>
                 <details className="group [&_summary::-webkit-details-marker]:hidden">
                 <summary href='#' className='flex gap-3 items-center'>
                    Company <Image className='group-open:rotate-180 object-contain' src='/icons/icon-arrow-down.svg' width={11} height={11} alt='dropdown icon'/>
                  </summary>
                  <ul className='px-5 pt-5 flex flex-col gap-5'>
                    <li className='flex items-center gap-4'>History</li>
                    <li className='flex items-center gap-4'>Our Team</li>
                    <li className='flex items-center gap-4'>Blog</li>
                  </ul>
                 </details>
                </li>
                <li>
                  <Link href='#'>Careers</Link>
                </li>
                <li>
                  <Link href='#'>About</Link>
                </li>
              </ul>
              <div className='register-btns-mobile mt-8 flex flex-col gap-3 group-open:-rotate-180gap-10 items-center text-medium_gray'>
                <button>Login</button>
                <button className='border-2 border-medium_gray px-6 py-2.5 w-full rounded-2xl'>Register</button>
              </div>
            </nav>
        </div>
      </div>
      </>
  )
}

export default SideBarNav