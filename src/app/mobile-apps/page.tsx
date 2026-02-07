import React from 'react';

const Mobile_Apps = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background Decorative Glow */}
      {/* <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div> */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 text-center px-4 max-w-3xl">
        {/* Top Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">
          Mobile Experience
        </span>

        {/* Hero Section */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Mobile Apps <br /> uploading soon...
        </h1>
      </div>

    </div>
  );
};

export default Mobile_Apps;