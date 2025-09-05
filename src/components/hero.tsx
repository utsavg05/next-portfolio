import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full h-screen max-w-5xl mx-auto mt-4 p-15 flex flex-col gap-4'>
        <div>
            <h2 className='font-serif text-xl text-accent tracking-widest'>Hi, my name is</h2>
        </div>
        <div>
            <h1 className='text-primary text-8xl font-bold font-serif'>Utsav Gupta.</h1>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-muted-foreground text-8xl font-serif'>I build things for the web.</h1>
            <p className='text-muted-foreground text-lg tracking-widest font-mono'>I’m a developer who enjoys crafting interactive experiences for the web. Whether it’s designing clean interfaces or solving complex problems with code, I aim to create things that truly make an impact.</p>
        </div>
    </div>
  )
}

export default HeroSection