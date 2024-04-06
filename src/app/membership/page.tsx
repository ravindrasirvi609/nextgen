import Link from "next/link";
import React from "react";

const Membership: React.FC = () => {
  const membershipPlans = [
    {
      id: 1,
      name: "Basic",
      price: "$9.99/month",
      features: ["Access to 5 magazines", "Limited articles"],
    },
    {
      id: 2,
      name: "Standard",
      price: "$19.99/month",
      features: ["Access to 10 magazines", "Unlimited articles"],
    },
    {
      id: 3,
      name: "Premium",
      price: "$29.99/month",
      features: ["Access to all magazines", "Exclusive articles"],
    },
  ];

  const subscriptionBenefits = [
    "Exclusive interviews with industry leaders",
    "Insights and analysis on emerging trends",
    "Access to premium content libraries",
    "Networking opportunities with other subscribers",
    "Monthly webinars and workshops",
  ];

  return (
    <div className="container mx-auto py-40">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-300">
        Membership Plans
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {membershipPlans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300"
          >
            <div className="px-6 py-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                {plan.name}
              </h2>
              <p className="text-gray-600 mb-4">{plan.price}</p>
              <ul className="list-disc pl-6 text-gray-800 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Subscription Benefits
              </h3>
              <ul className="list-disc pl-6 text-gray-800">
                {subscriptionBenefits.map((benefit, index) => (
                  <li key={index} className="mb-4">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <button className="w-full py-3 text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300 transform hover:scale-105">
                <Link href={`/membership/${plan.id}`}> Subscribe</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
