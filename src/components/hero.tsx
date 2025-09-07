"use client"
import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='w-full h-screen max-w-5xl mx-auto mt-10 px-15 py-14 flex flex-col gap-4'>
        <div>
            <h2 className='font-serif text-xl text-chart-1 tracking-widest'>Hi<span>👋</span>, my name is</h2>
        </div>
        <div>
            <h1 className='text-primary text-8xl font-bold font-serif'>Utsav Gupta.</h1>
        </div>
        <div className='flex flex-col gap-6'>
            <h1 className='text-muted-foreground text-8xl font-serif'>I build things for the web.</h1>
            <p className=' text-chart-1 text-lg tracking-widest font-mono'>I’m a <span className='text-foreground text-xl bg-card rounded-sm p-1'>FullStack Developer</span> who enjoys crafting interactive experiences for the web. Whether it’s designing clean interfaces or solving complex problems with code, I aim to create things that truly make an impact.</p>
        </div>
        <div className='flex items-center justify-center'> 
        <Link href={'https://retro-design-plum.vercel.app'} className='w-fit text-mono text-primary mt-1 tracking-wide border-b-1 border-b-foreground transition duration-200'>View Resume</Link>
        </div>
    </div>
  )
}

export default HeroSection