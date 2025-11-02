import React from 'react';

// FIX: Changed 'description' prop to 'children' to match component usage.
const Step = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <div className="relative flex flex-col items-center p-6 text-center">
    <div className="absolute -top-6 flex items-center justify-center w-12 h-12 text-2xl font-bold text-white bg-red-600 border-4 border-gray-900 rounded-full">
      {number}
    </div>
    <h3 className="text-xl font-bold mt-8 mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple &amp; Intuitive</h2>
          <p className="text-gray-400 mt-2">In three simple steps, transform your networking experience.</p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 hidden md:block" />
          <div className="grid md:grid-cols-3 gap-8">
            <Step number="1" title="Look & Scan">
              Simply look at a new contact. The onboard camera discreetly captures their image for analysis.
            </Step>
            <Step number="2" title="Search & Match">
              iSpy's advanced AI instantly searches public profiles to find a match, all in a matter of seconds.
            </Step>
            <Step number="3" title="Identify & Connect">
              View their professional details on the AR display and connect with confidence.
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;