import React from "react";

const Membership: React.FC = () => {
  const membershipPlans = [
    {
      name: "Basic",
      price: "$9.99/month",
      features: ["Access to 5 magazines", "Limited articles"],
    },
    {
      name: "Standard",
      price: "$19.99/month",
      features: ["Access to 10 magazines", "Unlimited articles"],
    },
    {
      name: "Premium",
      price: "$29.99/month",
      features: ["Access to all magazines", "Exclusive articles"],
    },
  ];

  return (
    <div className="container mx-auto py-44">
      <h1 className="text-2xl font-bold mb-4">Membership Plans</h1>
      <div className="grid grid-cols-3 gap-4">
        {membershipPlans.map((plan, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold mb-2 text-gray-900">
              {plan.name}
            </h2>
            <p className="text-gray-600 mb-2">{plan.price}</p>
            <ul className="list-disc pl-6 text-gray-800">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
