"use client"
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'

const HeaderPage = () => {
    return (
        <div className='flex justify-between mt-4 p-4 mx-auto w-full max-w-7xl shadow-shadow-color'>
            <div className='flex items-center gap-2'>
                <div>
                    <Avatar>
                        <Link href={"/"}><AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /></Link>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                {/* <Link href={"/"}><h1 className='font-bold text-lg'>Utsav G.</h1></Link> */}
            </div>
            <div className='flex items-center gap-10'>
                <Link href={"/"}><h5 className='text-sm font-light text-muted-foreground'>ABOUT ME</h5></Link>
                <Link href={"/#projects"}><h5 className='text-sm font-light text-muted-foreground'>PROJECTS</h5></Link>
                <Link href={"/#skills"}><h5 className='text-sm font-light text-muted-foreground'>SKILLS</h5></Link>
            </div>
            <div>
                <Button className='p-3 rounded-md bg-primary tracking-wide'>Contact</Button>
            </div>
        </div>
    )
}

export default HeaderPage