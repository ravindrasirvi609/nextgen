import React from 'react';

const Faq: React.FC = () => {
      return (
            <div className="container mx-auto mt-44">
                  <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
                  <div className="grid grid-cols-2 gap-4">
                        <div>
                              <h2 className="text-xl font-semibold mb-2">Question 1</h2>
                              <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    facilisi. Sed euismod, nunc non ullamcorper consectetur, justo
                                    mauris aliquet massa.
                              </p>
                        </div>
                        <div>
                              <h2 className="text-xl font-semibold mb-2">Question 2</h2>
                              <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    facilisi. Sed euismod, nunc non ullamcorper consectetur, justo
                                    mauris aliquet massa.
                              </p>
                        </div>
                        {/* Add more questions and answers here */}
                  </div>
            </div>
      );
};

export default Faq;