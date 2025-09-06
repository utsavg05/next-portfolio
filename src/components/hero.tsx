"use client"
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className='w-full h-screen max-w-5xl mx-auto mt-10 px-15 py-14 flex flex-col gap-4'>
        <div>
            <h2 className='font-serif text-xl text-chart-1 tracking-widest'>Hi<span className='animate-bounce'>👋</span>, my name is</h2>
        </div>
        <div>
            <h1 className='text-primary text-8xl font-bold font-serif'>Utsav Gupta.</h1>
        </div>
        <div className='flex flex-col gap-5'>
            <h1 className='text-muted-foreground text-8xl font-serif'>I build things for the web.</h1>
            <p className=' text-chart-1 text-lg tracking-widest font-mono'>I’m a <span className='text-foreground'>fullstack developer</span> who enjoys crafting interactive experiences for the web. Whether it’s designing clean interfaces or solving complex problems with code, I aim to create things that truly make an impact.</p>
        </div>
        <div > 
        {/* <Button className='w-fit bg-primary tracking-wide p-3 mt-3'>My Resume</Button> */}
        </div>
    </div>
  )
}

export default HeroSection