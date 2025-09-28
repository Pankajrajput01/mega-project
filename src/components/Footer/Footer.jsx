import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
            <div className="w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="mb-4">
                            <Logo width="120px" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">
                                &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-gray-400"
                                    to="/"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/"
                                >
                                    Affiliate Program
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Support
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/"
                                >
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer