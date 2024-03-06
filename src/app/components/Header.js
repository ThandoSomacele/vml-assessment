import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className='header container py-6 flex justify-between lg:justify-start lg:gap-20'>
      <Image src='/logo.svg' width='84' height='27' alt='snap logo' className='object-contain' />
      <Bars3Icon className='w-10 lg:hidden' />
      <nav className='lg:flex items-center justify-between w-full hidden'>
        <ul className='flex gap-10 text-medium_gray'>
          <li>
            <Link href='#' className='flex gap-1 items-center'>
              Features <ChevronDownIcon className='w-3.5' />
            </Link>
          </li>
          <li>
            <Link href='#' className='flex gap-1 items-center'>
              Company <ChevronDownIcon className='w-3.5' />
            </Link>
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
          <button className='border-2 border-medium_gray px-6 py-3 rounded-2xl'>Register</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
