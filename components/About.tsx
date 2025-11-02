import React from 'react';

const MissionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-wide mb-4">
            Connecting People, <span className="text-red-500">Instantly.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            iSpy is revolutionizing professional interactions by merging the digital and physical worlds. We believe in the power of immediate connection, facilitated by technology that is both powerful and respectful of privacy.
          </p>
        </div>

        <div className="flex justify-center items-center mb-20 relative">
            <div className="absolute w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
            <div className="relative group">
                <svg width="400" height="200" viewBox="0 0 400 200" className="w-full max-w-sm md:max-w-md lg:max-w-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150 150C150 122.386 127.614 100 100 100C72.3858 100 50 122.386 50 150" stroke="#4A5568" strokeWidth="2"/>
                    <path d="M100 100V50" stroke="#4A5568" strokeWidth="2"/>
                    <circle cx="100" cy="50" r="40" stroke="#4A5568" strokeWidth="2"/>
                    <path d="M115 50C115 58.2843 108.284 65 100 65C91.7157 65 85 58.2843 85 50C85 41.7157 91.7157 35 100 35" stroke="#4A5568" strokeWidth="2" className="group-hover:stroke-red-500 transition-colors duration-300"/>
                    <path d="M138 50H180" stroke="#4A5568" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M180 30L180 70" stroke="#4A5568" strokeWidth="1" strokeDasharray="2 2" className="opacity-50"/>
                    <path d="M190 50H220" stroke="#4A5568" strokeWidth="2" />
                    <path d="M220 50L240 30" stroke="#4A5568" strokeWidth="2" />
                    <path d="M220 50L240 70" stroke="#4A5568" strokeWidth="2" />
                    <rect x="250" y="20" width="120" height="20" rx="3" fill="#1A202C" stroke="#4A5568" strokeWidth="1"/>
                    <circle cx="260" cy="30" r="4" fill="#E53E3E"/>
                    <rect x="270" y="28" width="50" height="4" rx="2" fill="#4A5568"/>
                    <rect x="250" y="60" width="120" height="20" rx="3" fill="#1A202C" stroke="#4A5568" strokeWidth="1"/>
                    <circle cx="260" cy="70" r="4" fill="#E53E3E"/>
                    <rect x="270" y="68" width="70" height="4" rx="2" fill="#4A5568"/>
                </svg>
            </div>
            <div className="absolute w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-black/20 p-8 rounded-xl border border-white/10 backdrop-blur-sm transform hover:scale-105 hover:border-red-500/50 transition-all duration-300 shadow-lg">
            <div className="flex items-center mb-4">
              <MissionIcon />
              <h3 className="text-2xl font-bold ml-3 text-white">Our Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To build discreet AR eyewear that provides a hands-free tool for users to quickly connect with new contacts, identify people in real-time, and access their public social-media profiles, all while adhering to the strictest privacy standards.
            </p>
          </div>
          <div className="bg-black/20 p-8 rounded-xl border border-white/10 backdrop-blur-sm transform hover:scale-105 hover:border-red-500/50 transition-all duration-300 shadow-lg">
            <div className="flex items-center mb-4">
              <VisionIcon />
              <h3 className="text-2xl font-bold ml-3 text-white">Our Vision</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To redefine networking in the digital age by creating a future where technology fosters seamless, informed, and genuine human connections. We aim to break down barriers and empower professionals everywhere through innovative AR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
