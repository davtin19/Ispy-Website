
import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, title, imageUrl }) => (
  <div className="text-center">
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full w-full h-full object-cover border-4 border-gray-700"
      />
      <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-red-500 transition-all duration-300"></div>
    </div>
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-red-400">{title}</p>
  </div>
);

const Team: React.FC = () => {
  const teamMembers = [
    { name: "Michele Cavezza", title: "Founder", imageUrl: "https://picsum.photos/seed/michele/200/200" },
    { name: "David Tingey", title: "Founder", imageUrl: "https://picsum.photos/seed/david/200/200" },
    { name: "Teva Horan", title: "Founder", imageUrl: "https://picsum.photos/seed/teva/200/200" },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">The Core Team</h2>
          <p className="text-gray-400 mt-2">The minds behind the innovation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;