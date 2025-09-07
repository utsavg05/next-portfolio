// "use client"
// import React from 'react'
// import {Button} from '@/components/ui/button'
// import Link from 'next/link'
// import Image from 'next/image'

// const HeroSection = () => {
//   return (
//     <div className='w-full h-screen md:max-w-5xl mx-auto mt-5 md:mt-10 px-7 md:px-15 py-7 md:py-14 flex flex-col gap-4'>
//         <div>
//             <h2 className='font-serif text-xl mb-4 md:mb-0 text-chart-1 tracking-widest'>Hi<span>👋</span>, my name is</h2>
//         </div>
//         <div className='flex flex-row items-center justify-between'>
//             <h1 className='text-primary text-5xl md:text-8xl font-bold font-serif w-1/2'>Utsav Gupta.</h1>
//             <div className='md:hidden w-[50%] rounded-full'>
//               <Image src={'/profile.jpg'}
//               width={40}
//               height={40}
//               alt='profile_pic'
//               objectFit='cover'
//               />
//             </div>
//         </div>
//         <div className='flex flex-col gap-6 mt-3'>
//             <h1 className='text-muted-foreground text-4xl md:text-8xl font-serif'>I build things for the web.</h1>
//             <p className=' text-chart-1 text-lg md:tracking-widest font-mono'>I’m a <span className='text-foreground md:bg-chart-3 rounded-sm p-1'>FullStack Developer</span> who enjoys crafting interactive experiences for the web. Whether it’s designing clean interfaces or solving complex problems with code, I aim to create things that truly make an impact.</p>
//         </div>
//         <div className='flex items-center justify-center'> 
//         <Link href={'https://retro-design-plum.vercel.app'} className='w-fit text-mono text-primary mt-3 tracking-wide border-b-1 border-b-foreground transition duration-200'>View Resume</Link>
//         </div>
//     </div>
//   )
// }

// export default HeroSection





// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="w-full min-h-screen md:max-w-5xl mx-auto flex flex-col justify-center px-6 md:px-15 lg:px-20 py-8 md:py-16">
//       {/* Intro */}
//       <p className="font-mono text-md md:text-lg text-chart-1 tracking-widest mb-4">
//         Hi<span className="ml-1">👋</span>, my name is
//       </p>

//       {/* Name + Image */}
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-2 ">
//         <h1 className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight md:leading-[1.1] tracking-tight w-full md:w-2/3 text-center md:text-left">
//           Utsav Gupta
//         </h1>
//         <div className=" w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg shadow-chart-2 border-2 border-muted-foreground">
//           <Image
//             src={"/profile.jpg"}
//             width={200}
//             height={200}
//             alt="profile_pic"
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Tagline + Paragraph */}
//       <div className="flex flex-col gap-6 mt-8 md:mt-3 max-w-3xl">
//         <h2 className="text-muted-foreground text-3xl sm:text-4xl md:text-7xl lg:text-7xl font-serif leading-snug md:leading-[1.15] text-center md:text-left">
//           I build things for the web.
//         </h2>
//         <p className="text-chart-1 text-base sm:text-lg md:text-xl leading-relaxed md:leading-normal tracking-normal md:tracking-wide font-mono text-center md:text-left">
//           I’m a{" "}
//           <span className="text-foreground md:bg-chart-3 rounded-sm px-1">
//             FullStack Developer
//           </span>{" "}
//           who enjoys crafting interactive experiences for the web. Whether it’s
//           designing clean interfaces or solving complex problems with code, I
//           aim to create things that truly make an impact.
//         </p>
//       </div>

//       {/* CTA */}
//       <div className="flex items-center justify-center md:justify-start mt-5">
//         <Link
//           href={"https://retro-design-plum.vercel.app"}
//           className="w-fit font-mono text-primary text-lg tracking-wide border-b-2 border-b-foreground hover:border-primary transition duration-200"
//         >
//           View Resume
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen md:max-w-5xl mx-auto flex flex-col justify-center px-6 md:px-15 lg:px-20 py-4 md:py-16">
      {/* Intro */}
      <p className="font-mono text-md md:text-lg text-chart-1 tracking-widest mb-4">
        Hi<span className="ml-1">👋</span>, my name is
      </p>

      {/* Name + Image */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-1">
        <h1 className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight md:leading-[1.1] tracking-tight w-full md:w-2/3 text-center md:text-left">
          Utsav Gupta
        </h1>
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-64 overflow-hidden border-2 border-muted-foreground 
          rounded-full md:rounded-lg shadow-lg md:shadow-[0_0_35px_-5px_rgba(59,130,246,0.7)]">
          <Image
            src={"/profile.jpg"}
            width={250}
            height={300}
            alt="profile_pic"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Tagline + Paragraph */}
      <div className="flex flex-col gap-6 mt-8 md:mt-2 max-w-3xl">
        <h2 className="text-muted-foreground text-3xl sm:text-4xl md:text-7xl lg:text-7xl font-serif leading-snug md:leading-[1.15] text-center md:text-left">
          I build things for the web.
        </h2>
        <p className="text-chart-1 text-base sm:text-lg md:text-xl leading-relaxed md:leading-normal tracking-normal md:tracking-wide font-mono text-center md:text-left">
          I’m a{" "}
          <span className="text-foreground md:bg-chart-3 rounded-sm px-1">
            FullStack Developer
          </span>{" "}
          who enjoys crafting interactive experiences for the web. Whether it’s
          designing clean interfaces or solving complex problems with code, I
          aim to create things that truly make an impact.
        </p>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center md:justify-start mt-5">
        <Link
          href={"https://retro-design-plum.vercel.app"}
          className="w-fit font-mono text-primary text-lg tracking-wide border-b-2 border-b-foreground hover:border-primary transition duration-200"
        >
          View Resume
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
