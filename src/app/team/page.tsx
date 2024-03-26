import React from 'react';

interface TeamMember {
      name: string;
      designation: string;
      experience: number;
      imageUrl: string;
}

const Team: React.FC = () => {
      const teamMembers: TeamMember[] = [
            {
                  name: 'John Doe',
                  designation: 'Software Engineer',
                  experience: 5,
                  imageUrl: 'https://example.com/john-doe.jpg',
            },
            {
                  name: 'Jane Smith',
                  designation: 'UI/UX Designer',
                  experience: 3,
                  imageUrl: 'https://example.com/jane-smith.jpg',
            },
            // Add more team members here
      ];

      return (
            <div className="grid grid-cols-3 gap-4 py-44">
                  {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                              <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                              <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                              <p className="text-gray-500">{member.designation}</p>
                              <p className="text-gray-500">Experience: {member.experience} years</p>
                        </div>
                  ))}
            </div>
      );
};

export default Team;