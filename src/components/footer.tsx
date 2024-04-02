import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
      return (
            <footer className="footer-1 py-8 sm:py-12">
                  <div className="container mx-auto px-4">
                        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                              <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                                    <h5 className="text-xl font-bold mb-6">Policies</h5>
                                    <ul className="list-none footer-links">
                                          
                                          <li className="mb-2">
                                                <a href="privacy-policy" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy Policy</a>
                                          </li>
                                          <li className="mb-2">
                                                <a href="refund-policy" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Refund Policy</a>
                                          </li>
                                          <li className="mb-2">
                                                <a href="shipping-policy" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Shipping Policy</a>
                                          </li>
                                          
                                          
                                    </ul>
                              </div>
                              <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                                    <h5 className="text-xl font-bold mb-6">Features</h5>
                                    <ul className="list-none footer-links">
                                          <li className="mb-2">
                                                <a href="/terms-condition" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms & Conditions</a>
                                          </li>
                                          <li className="mb-2">
                                                <a href="faq" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">FAQ</a>
                                          </li>
                                    </ul>
                              </div>
                              <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                                    <h5 className="text-xl font-bold mb-6">About</h5>
                                    <ul className="list-none footer-links">
                                          <li className="mb-2">
                                                <a href="/team" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
                                          </li>
                                          {/* <li className="mb-2">
                                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
                                          </li> */}
                                    </ul>
                              </div>
                              <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                                    <h5 className="text-xl font-bold mb-6">Help</h5>
                                    <ul className="list-none footer-links">
                                          <li className="mb-2">
                                                <a href="/contact" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
                                          </li>
                                    </ul>
                              </div>
                              <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                                    <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                                    <div className="flex sm:justify-center xl:justify-start">
                                          <a href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                                                <i className="fab fa-facebook">F</i>
                                          </a>
                                          <a href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                                <i className="fab fa-twitter">X</i>
                                          </a>
                                          <a href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                                                <i className="fab fa-google-plus-g">G</i>
                                          </a>
                                    </div>
                              </div>
                        </div>

                        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
                              <div className="sm:w-full px-4 md:w-1/6">
                                    <strong>FWR</strong>
                              </div>
                              <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                                    <h6 className="font-bold mb-2">Address</h6>
                                    <address className="not-italic mb-4 text-sm">
                                          17, mayank Nagar<br />
                                          Naya Gaon, Pali,<br />
                                          Rajsthan, IND 306401
                                    </address>
                              </div>
                              <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                                    <h6 className="font-bold mb-2">Free Resources</h6>
                                    <p className="mb-4 text-sm">All the right reseved to NextGEN leaders<br />
                                         </p>
                              </div>
                              <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                                    <Link href="/membership">
                                          <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white sm:w-auto">
                                                Membership
                                          </button>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </footer>

      );
};

export default Footer;
