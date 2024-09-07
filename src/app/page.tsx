"use client";
import React, { useRef, useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: cardRef }
  );

  return (
    <div ref={cardRef} className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Home: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from("header", { y: -100, opacity: 0, duration: 1 })
        .from("h1", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
        .from("p", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
        .from("button", { scale: 0, opacity: 0, duration: 0.5 }, "-=0.5");

      ScrollTrigger.batch("#features .bg-gray-800", {
        onEnter: (elements) =>
          gsap.from(elements, {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 1,
          }),
        onLeave: (elements) =>
          gsap.to(elements, { opacity: 0, y: -50, stagger: 0.15, duration: 1 }),
        onEnterBack: (elements) =>
          gsap.to(elements, { opacity: 1, y: 0, stagger: 0.15, duration: 1 }),
        onLeaveBack: (elements) =>
          gsap.to(elements, { opacity: 0, y: 50, stagger: 0.15, duration: 1 }),
      });
    },
    { scope: mainRef }
  );

  return (
    <>
      <NextSeo
        title="Nexgen Leaders - Revolutionizing Startup and Pharma Insights"
        description="Experience the future of leadership with cutting-edge insights and analysis in the world of startups and pharmaceuticals."
        canonical="https://www.nextgenleaders.vip"
        openGraph={{
          url: "https://www.nextgenleaders.vip",
          title: "Nexgen Leaders - Revolutionizing Startup and Pharma Insights",
          description:
            "Experience the future of leadership with cutting-edge insights and analysis in the world of startups and pharmaceuticals.",
          images: [
            {
              url: "https://www.nextgenleaders.vip/images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Nexgen Leaders",
            },
          ],
          site_name: "Nexgen Leaders",
        }}
        twitter={{
          handle: "@nexgenleaders",
          site: "@nexgenleaders",
          cardType: "summary_large_image",
        }}
      />
      <div className="bg-black text-white min-h-screen overflow-hidden">
        <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              NEXTGEN LEADERS
            </Link>
            <div className="hidden md:flex space-x-6">
              <NavItem href="#about">About</NavItem>
              <NavItem href="#features">Features</NavItem>
              <NavItem href="#leaders">Leaders</NavItem>
              <NavItem href="#subscribe">Subscribe</NavItem>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden bg-black bg-opacity-90">
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <NavItem href="#about">About</NavItem>
                <NavItem href="#features">Features</NavItem>
                <NavItem href="#leaders">Leaders</NavItem>
                <NavItem href="#subscribe">Subscribe</NavItem>
              </div>
            </div>
          )}
        </header>

        <main ref={mainRef}>
          <section className="h-screen flex items-center justify-center text-center relative">
            <div className="container mx-auto px-4 z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                The Future of Leadership
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
                Stay ahead in the world of startups and pharma with cutting-edge
                insights and analysis.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                Join the Community
              </button>
            </div>
          </section>

          <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-black text-center">
                About Nexgen Leaders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-black">
                    Who We Are
                  </h3>
                  <p className="text-gray-800 mb-6">
                    Nexgen Leaders is a platform built by industry veterans with
                    decades of experience in startups and pharmaceuticals. Our
                    team combines deep industry knowledge with a passion for
                    innovation and leadership development.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-black">
                    Why It Matters
                  </h3>
                  <p className="text-gray-800 mb-6">
                    In today&apos;s rapidly evolving business landscape, staying
                    ahead is crucial. According to recent studies, 70% of
                    startups fail within the first 5 years, and the
                    pharmaceutical industry faces an average R&D cost of $2.6
                    billion per new drug. Our insights help leaders navigate
                    these challenges and seize opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-20 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Startup Insights"
                  description="In-depth analysis of entrepreneurship, innovation trends, and case studies of successful startups."
                />
                <FeatureCard
                  title="Pharma Trends"
                  description="Comprehensive coverage of AI-driven drug discovery, regulatory shifts, and market opportunities in pharmaceuticals."
                />
                <FeatureCard
                  title="Leader Interviews"
                  description="Exclusive interviews with successful leaders in startups and pharma, offering unique perspectives and strategies."
                />
              </div>
            </div>
          </section>

          <section id="leaders" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-black">
                Featured Leaders of the Month
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-800 rounded-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gray-700"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                      <p className="text-gray-400 mb-4">
                        CEO of InnovaTech, revolutionizing AI applications in
                        healthcare
                      </p>
                      <a
                        href="#"
                        className="text-white font-semibold inline-flex items-center hover:underline"
                      >
                        Read Interview
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="subscribe" className="py-20 bg-black">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Stay Informed
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss an update on the
                latest in startups and pharma.
              </p>
              <div className="max-w-md mx-auto mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Choose Your Plan
                </h3>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Free Tier</h4>
                  <ul className="text-gray-300 mb-4">
                    <li>Weekly newsletter</li>
                    <li>Access to public articles</li>
                  </ul>
                  <h4 className="text-xl font-semibold mb-2">Premium Tier</h4>
                  <ul className="text-gray-300 mb-4">
                    <li>All Free Tier benefits</li>
                    <li>Exclusive industry reports</li>
                    <li>Networking opportunities</li>
                    <li>Early access to events</li>
                  </ul>
                </div>
              </div>
              <form className="max-w-md mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-white text-black"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-6 py-2 rounded-r-full font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section id="testimonials" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                What Our Members Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-300 mb-4">
                      &quot;Nexgen Leaders has been instrumental in helping me
                      navigate the complex world of pharma startups. Their
                      insights are unparalleled.&quot;
                    </p>
                    <p className="font-semibold">
                      - Jane Smith, Founder of BioTech Innovations
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="cta" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
                Ready to Lead the Future?
              </h2>
              <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                Join Nexgen Leaders today and start your journey towards
                innovative leadership in startups and pharma industries.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
