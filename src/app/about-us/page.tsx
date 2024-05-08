import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-28">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          About NextGen Leaders Magazine
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to NextGen Leaders Magazine, where we celebrate the
          visionaries, innovators, and game-changers shaping the future of
          business and leadership.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          At NextGen Leaders Magazine, our mission is simple: to inspire and
          empower the next generation of leaders. We believe that leadership is
          not defined by age or title, but by the ability to drive positive
          change and make a lasting impact in the world.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          What We Offer
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Through our digital and print publications, we provide insightful
          articles, interviews, and resources designed to equip emerging leaders
          with the knowledge, skills, and inspiration they need to succeed. From
          in-depth profiles of industry disruptors to expert analysis of the
          latest trends, we cover a wide range of topics relevant to
          today&apos;s dynamic business landscape.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our team consists of passionate writers, editors, and industry experts
          dedicated to delivering high-quality content that informs, educates,
          and inspires our readers. With backgrounds in business, technology,
          entrepreneurship, and more, we bring a diverse range of perspectives
          to every story we tell.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Get Involved
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you&apos;re an aspiring entrepreneur, a seasoned executive, or
          simply someone with a passion for leadership, there are many ways to
          get involved with NextGen Leaders Magazine. Subscribe to our magazine,
          follow us on social media, or contribute your own insights through
          guest writing opportunities. Together, let&apos;s shape the future of
          leadership.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have questions or feedback? We&apos;d love to hear from you! Reach out
          to us at{" "}
          <a
            href="mailto:editor@nextgenleaders.vip"
            className="text-blue-500 hover:underline"
          >
            editor@nextgenleaders.vip
          </a>{" "}
          and connect with us on{" "}
          <a
            href="https://twitter.com/nextgenleaders"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/company/nextgenleaders"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
