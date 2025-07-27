import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='lg-px-10 lg-py-6 fixed px-4 py-4 top-0 z-50 flex w-full items-center justify-between'>
      <Image src="/images/logo-netflix.png" alt="Logotipo da marca" width={120} height={120}></Image>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </header>
  );
}