import React from 'react';
import Link from 'next/link';
import HomeComponent from './HomeComponent';
const NavbarComponent = () => {
  return (
    <nav className={"bg-white p-4 text-sky-950 px-20 ${hasScrolled ? 'shadow-md' : ''} "}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-sky-500 font-bold text-xl">
            <Link href="/">myPortfolio <span className='text-stone-500'>.</span></Link>
          </div>
          <div className="flex space-x-6 font-bold">
            <Link href="/HomeComponent" className='hover:text-sky-500'>Home</Link>
            <Link href="/about" className='hover:text-sky-500'>About</Link>
            <Link href="/projects"className='hover:text-sky-500'>Projects</Link>
            <Link href="/contact"className='hover:text-sky-500'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Mark the Navbar component as a Client Component
export default NavbarComponent;
