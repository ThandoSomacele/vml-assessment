'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Header() {
  const [displayFetures,setDisplyFeature] = useState('hidden');
  const [displayComapany,setDisplyCompany] = useState('hidden');
  const toggleFeatures = (e)=>{
   console.log(e.target);
    displayFetures === 'hidden' ? setDisplyFeature('flex') : setDisplyFeature('hidden');
  }
  const toggleCompany = ()=>{
    displayComapany === 'hidden' ? setDisplyCompany('flex') : setDisplyCompany('hidden');
  }


  return (
    <div className='header md:px-10 px-4 md:py-6 py-4 flex justify-between lg:justify-start lg:gap-16 w-screen'>
      <Image src='/logo.svg' width='84' height='27' alt='snap logo' className='object-contain' />
      {/* <Bars3Icon className='w-10 lg:hidden' /> */}
      <Image className='object-contain lg:hidden' src='/icons/icon-menu.svg' width='32' height='32' alt='snap logo' />
      <nav className='lg:flex items-center justify-between w-full hidden lg:text-sm tracking-[0.5px]'>
        <ul className='flex gap-10 text-medium_gray'>
          <li>
            <Link href='#' className='flex gap-1.5 items-center' onClick={toggleFeatures}>
              Features <Image className='object-contain' src='/icons/icon-arrow-down.svg' width={10} height={10} alt='dropdown icon'/>
            </Link>
            <ul className={`${displayFetures} bg-white absolute p-6 flex-col gap-3 shadow-2xl rounded-xl -ml-[5%] mt-3.5 text-[13px] z-50`}>
                <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-todo.svg' width={14} height={14} alt='todo icon'/>Todo List</li>
                <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-calendar.svg' width={14} height={14} alt='calendar icon'/>Calendar</li>
                <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-reminders.svg' width={14} height={14} alt='reminders icon'/>Reminders</li>
                <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-planning.svg' width={14} height={14} alt='planning icon'/>Planning</li>
              </ul>
              <div className={`${displayFetures} w-screen h-screen bg-transparent absolute top-0 right-0 z-40`}  onClick={toggleFeatures}/>
          </li>
          <li>
            <Link href='#' className='flex gap-1.5 items-center' onClick={toggleCompany}>
              Company <Image className='object-contain' src='/icons/icon-arrow-down.svg' width={10} height={10} alt='dropdown icon'/>
            </Link>
            <ul className={`${displayComapany} absolute p-6  flex-col gap-3 shadow-2xl rounded-xl mt-3.5 text-[13px]`}>
              <li className='flex items-center gap-4'>History</li>
              <li className='flex items-center gap-4'>Our Team</li>
              <li className='flex items-center gap-4'>Blog</li>
            </ul>
            <div className={`${displayComapany} w-screen h-screen bg-transparent absolute top-0 right-0 z-40`}  onClick={toggleCompany}/>
          </li>
          <li>
            <Link href='#'>Careers</Link>
          </li>
          <li>
            <Link href='#'>About</Link>
          </li>
        </ul>
        <div className='register-btns flex gap-10 items-center text-medium_gray'>
          <button>Login</button>
          <button className='border-2 border-medium_gray px-6 py-2.5 rounded-2xl'>Register</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;