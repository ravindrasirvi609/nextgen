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
      designation: "Founder & CEO",
      experience: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Vikram is the founder and CEO of NextGen Leaders Magazine. He is a visionary leader with a passion for empowering the next generation of leaders. With over 5 years of experience in the industry, Vikram has built a reputation for delivering high-quality results and providing exceptional service to clients. He is committed to fostering a culture of continuous learning, innovation, and collaboration, and he is dedicated to driving positive change in the world.",
    },
    {
      name: "Ravindra Sirvi",
      designation: "UI/UX Designer",
      experience: 3,
      imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Ravindra is a talented UI/UX designer with a passion for creating beautiful and intuitive user experiences. With over 3 years of experience in the industry, Ravindra has a keen eye for detail and a deep understanding of user needs. He is dedicated to delivering high-quality designs that delight users and drive business results.",
    },
    {
      name: "Priya Sharma",
      designation: "Content Writer",
      experience: 4,
      imageUrl: "https://images.unsplash.com/photo-1570945880236-10f34833a271?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Priya is a skilled content writer with a passion for storytelling and communication. With over 4 years of experience in the industry, Priya has a proven track record of creating engaging and informative content that resonates with audiences. She is dedicated to delivering high-quality work that drives results and inspires action.",
    },
    {
      name: "Rahul Singh",
      designation: "Marketing Specialist",
      experience: 6,
      imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Rahul is a seasoned marketing specialist with a passion for driving growth and engagement. With over 6 years of experience in the industry, Rahul has a deep understanding of digital marketing strategies and tactics. He is dedicated to delivering results and providing exceptional service to clients.",
    },
    {
      name: "Anjali Gupta",
      designation: "Graphic Designer",
      experience: 2,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Anjali is a talented graphic designer with a passion for creating visually stunning designs. With over 2 years of experience in the industry, Anjali has a keen eye for detail and a deep understanding of design principles. She is dedicated to delivering high-quality work that delights clients and engages audiences.",
    },
    {
      name: "Rajesh Kumar",
      designation: "Web Developer",
      experience: 5,
      imageUrl: "https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Rajesh is a skilled web developer with a passion for building innovative and user-friendly websites. With over 5 years of experience in the industry, Rajesh has a deep understanding of web development technologies and best practices. He is dedicated to delivering high-quality websites that meet client needs and exceed expectations.",
    },
    {
      name: "Shweta Singh",
      designation: "SEO Specialist",
      experience: 3,
      imageUrl: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Shweta is an experienced SEO specialist with a passion for driving organic traffic and improving search engine rankings. With over 3 years of experience in the industry, Shweta has a deep understanding of SEO strategies and tactics. She is dedicated to delivering results and providing exceptional service to clients.",
    },
    {
      name: "Ramesh Kumar",
      designation: "Photographer",
      experience: 4,
      imageUrl: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      description:
        "Ramesh is a talented photographer with a passion for capturing beautiful moments and telling stories through images. With over 4 years of experience in the industry, Ramesh has a keen eye for detail and a deep understanding of photography techniques. He is dedicated to delivering high-quality images that resonate with audiences and evoke emotion.",
    },
    {
      name: "Sunita Sharma",
      designation: "Social Media Manager",
      experience: 2,
      imageUrl: "https://images.unsplash.com/flagged/photo-1576571670140-7f06c13b4fe4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Sunita is a skilled social media manager with a passion for building engaged communities and driving brand awareness. With over 2 years of experience in the industry, Sunita has a deep understanding of social media platforms and best practices. She is dedicated to delivering results and providing exceptional service to clients.",
    },
    {
      name: "Amit Kumar",
      designation: "Video Editor",
      experience: 3,
      imageUrl: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      description:
        "Amit is a talented video editor with a passion for creating compelling and engaging videos. With over 3 years of experience in the industry, Amit has a keen eye for detail and a deep understanding of video editing techniques. He is dedicated to delivering high-quality videos that resonate with audiences and drive results.",
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
