import React, { useEffect, useRef, useState } from 'react';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const WebsiteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);


const AnimatedText = ({ text, delay }: { text: string, delay: number }) => {
    return (
        <span className="animated-text opacity-0" style={{ animationDelay: `${delay}ms`}}>
            {text}
        </span>
    );
};

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStartAnimation(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-wide mb-4">
            See The Future, <span className="text-red-500">In Real-Time.</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We're not just telling you about the future of networking, we're showing you. This is what it feels like to use iSpy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Product Render */}
          <div className="flex justify-center items-center h-96 [perspective:1000px]">
            <div className="relative group transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)_rotateX(5deg)]">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-gray-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-1 bg-gray-900 rounded-lg leading-none flex items-center">
                <svg viewBox="0 0 400 150" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="lensGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#1a202c', stopOpacity: 0.8}} />
                            <stop offset="100%" style={{stopColor: '#2d3748', stopOpacity: 0.9}} />
                        </linearGradient>
                    </defs>
                    <path d="M50,75 C60,40 130,40 150,75 L160,75 L160,95 L150,95 C140,130 70,130 50,95 L40,95 L40,75 Z" fill="#111827" stroke="#4A5568" strokeWidth="2"/>
                    <path d="M250,75 C260,40 330,40 350,75 L360,75 L360,95 L350,95 C340,130 270,130 250,95 L240,95 L240,75 Z" fill="#111827" stroke="#4A5568" strokeWidth="2"/>
                    <path d="M160,75 C180,65 220,65 240,75" fill="none" stroke="#4A5568" strokeWidth="3"/>
                    <path d="M55,77 C65,50 125,50 145,77 L145,93 C135,120 75,120 55,93 Z" fill="url(#lensGradient)"/>
                    <path d="M255,77 C265,50 325,50 345,77 L345,93 C335,120 275,120 255,93 Z" fill="url(#lensGradient)"/>
                    <circle cx="365" cy="85" r="3" fill="#ef4444" className="led-light" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: POV Mockup */}
          <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-2xl shadow-black h-96">
            <video 
              src="https://res.cloudinary.com/db3pcwsrm/video/upload/v1683070984/iSpy/pexels-business-meeting.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
            ></video>
            <div className="absolute inset-0 bg-black/40"></div>

            {startAnimation && (
              <div className="absolute inset-0 flex items-center justify-center">
                  {/* Scanning Reticle */}
                  <div className="absolute w-40 h-40 scanning-reticle">
                      <div className="corner top-left"></div>
                      <div className="corner top-right"></div>
                      <div className="corner bottom-left"></div>
                      <div className="corner bottom-right"></div>
                      <div className="scan-line"></div>
                  </div>

                  {/* AR Overlay Card */}
                  <div className="ar-card opacity-0">
                      <div className="w-72 p-4 bg-black/70 backdrop-blur-md rounded-xl border border-red-500/30 shadow-lg shadow-red-900/50">
                          <div className="flex items-center space-x-4">
                              <img 
                                  src="https://i.pravatar.cc/150?u=eleanorvance"
                                  alt="Eleanor Vance"
                                  className="w-16 h-16 rounded-full border-2 border-gray-600"
                              />
                              <div>
                                  <h4 className="text-lg font-bold text-white"><AnimatedText text="Eleanor Vance" delay={2000}/></h4>
                                  <p className="text-sm text-gray-300"><AnimatedText text="Lead Product Designer" delay={2200}/></p>
                              </div>
                          </div>
                          <div className="my-3 h-px bg-gray-700/50"></div>
                          <div className="flex items-center justify-between text-gray-400">
                              <p className="text-xs font-semibold uppercase tracking-wider"><AnimatedText text="QuantumLeap" delay={2400}/></p>
                              <div className="flex items-center space-x-3 opacity-0" style={{animationDelay: '2600ms', animationFillMode: 'forwards', animationName: 'fadeIn'}}>
                                <a href="#experience" className="group" aria-label="LinkedIn Profile">
                                    <LinkedInIcon />
                                </a>
                                <a href="#experience" className="group" aria-label="Personal Website">
                                    <WebsiteIcon />
                                </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .led-light {
          animation: pulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        @keyframes pulse {
          0%, 100% { filter: drop-shadow(0 0 2px #ef4444); opacity: 0.8; }
          50% { filter: drop-shadow(0 0 5px #ef4444); opacity: 1; }
        }
        
        .scanning-reticle {
          animation: fadeIn 0.5s ease-out forwards, lockOn 1.5s 0.5s ease-in-out forwards;
        }
        
        .scanning-reticle .corner {
            position: absolute;
            width: 20px;
            height: 20px;
            border-color: #ef4444;
            opacity: 0.7;
        }
        .scanning-reticle .top-left { top: -2px; left: -2px; border-top-width: 2px; border-left-width: 2px; }
        .scanning-reticle .top-right { top: -2px; right: -2px; border-top-width: 2px; border-right-width: 2px; }
        .scanning-reticle .bottom-left { bottom: -2px; left: -2px; border-bottom-width: 2px; border-left-width: 2px; }
        .scanning-reticle .bottom-right { bottom: -2px; right: -2px; border-bottom-width: 2px; border-right-width: 2px; }
        
        .scanning-reticle .scan-line {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: #ef4444;
            box-shadow: 0 0 10px #ef4444;
            animation: sweep 1.5s 0.5s ease-in-out forwards;
        }

        .ar-card {
            animation: fadeIn 0.5s ease-out 1.8s forwards;
            transform: scale(0.95);
        }
        .animated-text {
            animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes lockOn {
            0% { transform: scale(1.5); opacity: 0; }
            20% { opacity: 0.7; }
            80% { transform: scale(1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 0; }
        }

        @keyframes sweep {
            0% { top: 0; }
            100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Experience;