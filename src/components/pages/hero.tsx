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





// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { MdOutlineFileDownload } from "react-icons/md";

// const HeroSection = () => {
//   return (
//     <section className="w-full min-h-screen md:max-w-5xl mx-auto flex flex-col justify-center px-6 md:px-15 lg:px-20 py-4 md:py-16">
//       {/* Intro */}
//       <p className="font-mono text-sky-900 text-md md:text-lg dark:text-chart-1 tracking-widest mb-6">
//         Hi<span className="ml-1">👋</span>, my name is
//       </p>

//       {/* Name + Image */}
//       <div className="flex flex-col md:flex-row items-center  md:items-center gap-6 md:gap-1">
//         <h1 className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight md:leading-[1.1] tracking-tight w-full md:w-2/3 text-center md:text-left">
//           Utsav Gupta
//         </h1>
//         <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-64 overflow-hidden border-2 border-muted-foreground 
//           rounded-full md:rounded-lg shadow-lg md:shadow-[0_0_35px_-5px_rgba(59,130,246,0.7)]">
//           <Image
//             src={""}
//             width={250}
//             height={300}
//             alt="profile_pic"
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Tagline + Paragraph */}
//       <div className="flex flex-col gap-6 mt-8 md:mt-2 max-w-3xl">
//         <h2 className="text-muted-foreground text-3xl sm:text-4xl md:text-7xl lg:text-7xl font-serif leading-snug md:leading-[1.15] text-center md:text-left">
//           I build things for the web.
//         </h2>
//         <p className="dark:text-chart-1 text-sky-900 dark:text-base sm:text-lg md:text-xl leading-relaxed md:leading-normal tracking-normal md:tracking-wide font-mono text-center md:text-left">
//           I’m a{" "}
//           <span className="bg-sky-100 text-sky-800 dark:text-foreground dark:bg-chart-3 rounded-sm px-1.5 py-0.5">
//             Full Stack Developer
//           </span>{" "}
//           who enjoys crafting interactive experiences for the web. Whether it’s
//           designing clean interfaces or solving complex problems with code, I
//           aim to create things that truly make an impact.
//         </p>
//       </div>

//       {/* CTA */}
//       <div className="flex items-center justify-center md:justify-start mt-7">
//         <div className="flex items-center gap-1 bg-primary text-background px-3 py-1 rounded-lg">
//         <Link
//           href={"https://drive.google.com/file/d/1Hp3SinrFrvOXqI-umzciRPoPVbe2I_mC/view?usp=sharing"}
//           className="flex items-center gap-1 bg-primary text-background text-lg px-2 py-0.5 rounded-lg w-fit font-mono hover:border-primary transition duration-200"
//         >
//           <MdOutlineFileDownload size="22px" />
//            Resume
//         </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen md:max-w-4xl mx-auto flex flex-col justify-center px-6 md:px-5 py-4 md:py-16">
      {/* Intro */}
      <p className="font-mono text-sky-900 text-md md:text-lg dark:text-chart-1 tracking-widest mb-6">
      {/* <p className="font-mono text-sky-900 text-md md:text-lg dark:text-muted-foreground tracking-widest mb-6"> */}
        Hi<span className="ml-1">👋</span>, my name is
      </p>
      {/* Name + Image */}
      {/* <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <h1 className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight md:leading-[1.1] tracking-tight text-center md:text-left">
          Utsav Gupta <br />
         </h1>
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-64 flex-shrink-0 overflow-hidden border-2 border-muted-foreground 
          rounded-full md:rounded-lg shadow-lg md:shadow-[0_0_35px_-5px_rgba(59,130,246,0.7)]">
          <Image
            src={"/"}
            width={250}
            height={300}
            alt="profile_pic"
            className="object-cover w-full h-full"
          />
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left w-fit">
          <h1 className="text-primary text-5xl sm:text-6xl md:text-6xl lg:text-7xl w-fit font-bold font-serif leading-tight md:leading-[1.1] tracking-tight">
            Utsav Gupta
          </h1>

          {/* SUBTEXT — fills empty space */}
          <p className="hidden md:block mt-4 text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-xl w-fit">
            Building products, not just projects.
          </p>

          {/* OPTIONAL ACCENT LINE */}
          <div className="hidden md:block mt-4 h-[2px] w-94 bg-primary/60 mx-auto md:mx-0" />
          <p className="hidden md:block mt-3 text-sm sm:text-base md:text-lg text-muted-foreground w-fit tracking-wide">
            Full-Stack Developer
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-50 flex-shrink-0 overflow-hidden 
    border border-primary/30 rounded-full md:rounded-lg 
    shadow-lg md:shadow-[0_0_35px_-5px_rgba(244,199,83,0.6)] sm:mr-51"
        >
          <Image
            src={"/pp.jpg"}
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
        <p className="dark:text-muted-foreground text-sky-900 dark:text-base sm:text-lg md:text-xl leading-relaxed md:leading-normal tracking-normal md:tracking-wide font-mono text-center md:text-left">
          I'm a{" "}
          <span className="bg-sky-100 dark:bg-chart-3 dark:bg-primary dark:text-black rounded-sm px-1.5 py-0.5">
            Full Stack Developer
          </span>{" "}
          who enjoys crafting interactive experiences for the web. Whether it's
          designing clean interfaces or solving complex problems with code, I
          aim to create things that truly make an impact.
        </p>
      </div>
      {/* CTA */}
      <div className="flex items-center justify-center md:justify-start mt-7">
        <Link
          href={"https://drive.google.com/file/d/1dqCzDV8AGFhyZqj5kXN4gyE47X3y0esQ/view?usp=sharing"}
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-1 bg-primary text-background text-lg px-3 py-1 rounded-lg w-fit font-mono hover:border-primary transition duration-200"
        >
          <MdOutlineFileDownload size="22px" />
          Resume
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;