"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider,auth } from 'firebase/auth';
import { SignInButton } from '@clerk/nextjs';



export default function Page(){
const [error, setError] = useState('');

//google signin function call
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth,GoogleAuthProvider);
    const user = result.user;
    alert(`Logged in as ${user.email}`);
    
    window.location.href = '/loginpage';
  } catch (error) {
    setError(error.message);
  }
};


    return(
    
      <SignInButton>
        
      </SignInButton>
   );     
}
