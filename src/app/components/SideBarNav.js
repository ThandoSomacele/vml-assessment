import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

function SideBarNav() {
  return (
    <div className='lg:hidden mobile-bg-filter w-screen h-screen bg-black bg-opacity-70 absolute flex justify-end items-start '>
      <div className='bg-white w-2/3 h-screen px-6 py-4 flex flex-col justify-start items-end overflow-hidden'>
            {/* <XMarkIcon className='w-10 text-almost_black' /> */}
            <Image className='object-contain lg:hidden' src='/icons/icon-close-menu.svg' width='32' height='32' alt='snap logo' />
            <nav className='lg:hidden w-full text-sm py-5 md:px-10 tracking-[0.5px]'>
              <ul className='flex flex-col gap-6 text-medium_gray'>
                <li>
                  <Link href='#' className='flex gap-3 items-center'>
                    Features <Image className='object-contain' src='/icons/icon-arrow-down.svg' width={11} height={11} alt='dropdown icon'/>
                  </Link>
                  <ul className='px-5 pt-5 flex flex-col gap-5'>
                    <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-todo.svg' width={16} height={16} alt='todo icon'/>Todo List</li>
                    <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-calendar.svg' width={16} height={16} alt='calendar icon'/>Calendar</li>
                    <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-reminders.svg' width={16} height={16} alt='reminders icon'/>Reminders</li>
                    <li className='flex items-center gap-4'><Image className='object-contain' src='/icons/icon-planning.svg' width={16} height={16} alt='planning icon'/>Planning</li>
                  </ul>
                </li>
                <li>
                  <Link href='#' className='flex gap-3 items-center'>
                    Company <Image className='object-contain' src='/icons/icon-arrow-down.svg' width={11} height={11} alt='dropdown icon'/>
                  </Link>
                  <ul className='px-5 pt-5 flex flex-col gap-5'>
                    <li className='flex items-center gap-4'>History</li>
                    <li className='flex items-center gap-4'>Our Team</li>
                    <li className='flex items-center gap-4'>Blog</li>
                  </ul>
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
  )
}

export default SideBarNav