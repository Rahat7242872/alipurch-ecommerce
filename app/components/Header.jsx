// components/Header.js
"use client";
import Image from 'next/image';
import Link from 'next/link';
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

const Header = () => {
 


  return (
    <header className="bg-white text-black p-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src={'/logo.png'} width={120} height={80}/>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="active:text-red-500">Home</Link>
          <Link href="/Shop" className="hover:text-red-500">Shop</Link>
          <Link href="/About" className="hover:text-red-500">About</Link>
          <Link href="/Contact" className="hover:text-red-500">Contact</Link>
        </nav>
        
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
             <button className='bg-blue-600 px-4 py-1 rounded-full text-white hidden md:flex space-x-6'>Login</button>
          </SignInButton>
        </SignedOut>
          
       
      </div>
    </header>
  );
};

export default Header;

