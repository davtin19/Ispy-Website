import React from 'react';

const ScanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const DisplayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

{/* FIX: Passed description text as children to FeatureCard components to fix missing 'children' prop error. */}
const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-red-500 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Core Technology</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Discover the powerful features that make iSpy the ultimate networking tool.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={<ScanIcon />} title="Facial Recognition">
            Onboard camera captures an image and locally runs a facial-recognition algorithm to find potential matches from a local cache or encrypted server.
          </FeatureCard>
          <FeatureCard icon={<SearchIcon />} title="Reverse Social Search">
            If a face is not recognized, the system calls a reverse-image search API to cross-reference publicly available photos, ensuring you always find who you're looking for.
          </FeatureCard>
          <FeatureCard icon={<DisplayIcon />} title="Instant AR Display">
            Once matched, a minimal overlay displays the individual's name, job title, and links to professional profiles, right in your field of view.
          </FeatureCard>
          <FeatureCard icon={<ShieldIcon />} title="Consent & Privacy First">
            Users must verbally request consent before scanning. A bright LED signals when scanning is in progress, ensuring transparency and trust.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;