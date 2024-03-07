import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon,  } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Header() {
  return (
    <div className='header md:px-10 px-4 py-6 flex justify-between lg:justify-start lg:gap-20'>
      <Image src='/logo.svg' width='84' height='27' alt='snap logo' className='object-contain' />
      <Bars3Icon className='w-10 lg:hidden' />
      <nav className='lg:flex items-center justify-between w-full hidden lg:text-sm'>
        <ul className='flex gap-10 text-medium_gray'>
          <li>
            <Link href='#' className='flex gap-1 items-center'>
              Features <ChevronDownIcon className='w-4' />
            </Link>
          </li>
          <li>
            <Link href='#' className='flex gap-1 items-center'>
              Company <ChevronDownIcon className='w-4' />
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
          <button className='border-2 border-medium_gray px-6 py-2.5 rounded-2xl'>Register</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>