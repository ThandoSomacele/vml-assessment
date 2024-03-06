import React from 'react';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className='header container py-6 flex justify-between'>
      <Image src='/logo.svg' width='84' height='27' alt='snap logo' className='object-contain' />
      <Bars3Icon className='w-10' />
    </div>
  );
}

export default Header;
