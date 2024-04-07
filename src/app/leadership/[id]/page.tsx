import React from "react";
import Image from "next/image";

const LeadersDetails: React.FC = () => {
  const leader = {
    id: 1,
    name: "John Doe",
    position: "Chief Executive Officer",
    bio: "John Doe was born on 30 November 1858, in Myemsingh, Faridpur, a part of the Dhaka District now in Bangladesh. He attended the village school until he was 11. He then moved to Kolkata where he enrolled in St. Xavier’s. He was very much interested in Biology. However, Father Lafont, a famous Professor of Physics, inspired in Bose a great interest in Physics. Having obtained his B.A. in physical sciences, twenty-two-year-old Bose left for London to obtain a medical degree. However, he kept falling ill and had to discontinue his plans to be a doctor. He then obtained his B.A. degree from Christ College, Cambridge. He returned to India in 1885 and joined Presidency College, Kolkata as an Assistant Professor of Physics, where he remained until 1915. There was a peculiar practice in the college at that time. The Indian teachers in the college were paid one-third of what the British teachers were paid! So Bose refused his salary but worked for three years. The fourth year he was paid in full! He was an excellent teacher, extensively using scientific demonstrations in class. Some of his students, such as S. N. Bose, went on to become famous physicists themselves. During this period, Bose also started doing original scientific work in the area of microwaves, carrying out experiments involving refraction, diffraction, and polarization. He developed the use of galena crystals for making receivers, both for short-wavelength radio waves and for white and ultraviolet light. In 1895, two years before Marconi’s demonstration, Bose demonstrated wireless communication using radio waves, using them to ring a bell remotely and to explode some gunpowder. Many of the microwave components familiar today - waveguides, horn antennas, polarizers, dielectric lenses and prisms, and even semiconductor detectors of electromagnetic radiation - were invented and used by Bose in the last decade of the nineteenth century. He also suggested the existence of electromagnetic radiation from the Sun, which was confirmed in 1944. Bose then turned his attention to response phenomena in plants. He showed that not only animal but vegetable tissues produce similar electric responses under different kinds of stimuli – mechanical, thermal, electrical, and chemical. Bose was knighted in 1917 and soon thereafter elected Fellow of the Royal Society, London, (both as physicist and biologist!). Bose had worked all along without the right kind of scientific instruments and laboratory. For a long time, he had been thinking of building a laboratory. The result was the establishment of the Bose Research Institute in Kolkata. It continues to be a famous center of research in basic sciences.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    email: "ravi.sirvi609@gmail.com",
    phone: "+91 1234567890",
    location: "New York, USA",
    education: "MBA, Harvard Business School",
    linkedin: "https://www.linkedin.com/in/johndoe",
  };

  return (
    <div className="bg-gray-100 py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full mx-auto rounded-lg overflow-hidden">
            <Image
              src={leader.imageUrl}
              alt={leader.name}
              layout="responsive"
              width={400}
              height={300}
              className="object-cover rounded-lg shadow-lg object-center transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v15m0-15V3a9 9 0 0118 0v2a9 9 0 01-9 9H9a9 9 0 01-9-9V5a3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-700">{leader.email}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">{leader.name}</h2>
          <p className="text-lg font-semibold text-gray-600">
            {leader.position}
          </p>
          <p className="text-gray-700 leading-relaxed">{leader.bio}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v15m0-15V3a9 9 0 0118 0v2a9 9 0 01-9 9H9a9 9 0 01-9-9V5a3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-700">{leader.phone}</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v15m0-15V3a9 9 0 0118 0v2a9 9 0 01-9 9H9a9 9 0 01-9-9V5a3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-700">{leader.location}</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v15m0-15V3a9 9 0 0118 0v2a9 9 0 01-9 9H9a9 9 0 01-9-9V5a3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-700">{leader.education}</span>
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Social Links
            </h3>
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {leader.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadersDetails;
