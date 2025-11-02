
import React from 'react';

interface RoadmapItemProps {
  timeline: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ timeline, title, description, isLast = false }) => (
  <div className="relative pl-8">
    {!isLast && <div className="absolute top-2 left-0 h-full w-0.5 bg-gray-700"></div>}
    <div className="absolute top-2 -left-2.5 w-5 h-5 bg-red-500 rounded-full border-4 border-gray-900"></div>
    <p className="text-red-500 font-semibold mb-1">{timeline}</p>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Roadmap: React.FC = () => {
  const items = [
    {
      timeline: "Q1 2026",
      title: "Prototype 1",
      description: "Assemble basic hardware; integrate camera, microphone and display; test face-detection and API calls."
    },
    {
      timeline: "Q2 2026",
      title: "Prototype 2",
      description: "Add facial recognition, reverse image lookup and simple AR overlay."
    },
    {
      timeline: "Q3 2026",
      title: "Beta Version",
      description: "Implement consent LED, speech-to-text, and conduct pilot at small networking events."
    },
    {
      timeline: "Q1 2027",
      title: "Production Version",
      description: "Finalize design, optimize battery, package product, and prepare for marketing launch."
    }
  ];

  return (
    <section id="roadmap" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Journey Ahead</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Follow our progress as we bring iSpy to life.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {items.map((item, index) => (
              <RoadmapItem
                key={item.timeline}
                timeline={item.timeline}
                title={item.title}
                description={item.description}
                isLast={index === items.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
