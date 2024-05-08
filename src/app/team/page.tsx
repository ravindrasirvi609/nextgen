import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  designation: string;
  experience: number;
  imageUrl: string;
  description: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Vikram Choudhury",
      designation: "Editor-in-Chief",
      experience: 7,
      imageUrl:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Vikram is a seasoned editor-in-chief with a passion for storytelling and journalism. With over 7 years of experience in the industry, Vikram has a deep understanding of editorial processes and best practices. He is dedicated to delivering high-quality content that informs, inspires, and engages readers.",
    },
    {
      name: "Ravindra Sirvi",
      designation: "Web Developer",
      experience: 3,
      imageUrl:
        "https://res.cloudinary.com/dyndwmvma/image/upload/v1713152513/product-images/DSC_0003_skgayq.jpg",
      description:
        "Ravindra is a skilled web developer with a passion for building innovative and user-friendly websites. With over 3 years of experience in the industry, Ravindra has a deep understanding of web development technologies and best practices. He is dedicated to delivering high-quality websites that meet client needs and exceed expectations.",
    },
    {
      name: "Anjali Chouhan",
      designation: "Marketing manager",
      experience: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1570945880236-10f34833a271?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Anjali is a skilled marketing manager with a passion for driving growth and engagement. With over 3 years of experience in the industry, Anjali has a deep understanding of marketing strategies and tactics. She is dedicated to delivering results and providing exceptional service to clients.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-44">
      <h1 className="text-4xl font-bold text-center mb-8">Our Amazing Team</h1>
      <p className="text-lg text-center text-gray-400 mb-8">
        Meet the talented individuals behind our success. Our team is dedicated
        to delivering high-quality results and providing exceptional service to
        our clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-8 shadow-lg rounded-lg">
            <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <Image
                src={member.imageUrl}
                alt={member.name}
                layout="fill"
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 text-center">
              {member.name}
            </h2>
            <p className="text-gray-500 text-center">{member.designation}</p>
            <p className="text-gray-500 text-center">
              Experience: {member.experience} years
            </p>
            <p className="text-gray-700 mt-4">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
