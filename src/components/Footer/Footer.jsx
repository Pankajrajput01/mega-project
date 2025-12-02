import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="w-full mt-16 pt-12 pb-8 border-t border-blue-100" style={{background: 'linear-gradient(180deg, rgba(240,249,255,0.5), rgba(248,250,252,0.8))'}}>
            <div className="w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNUmHtk1gIkS9j5GiaXOvJbbRZxfrpTlPhA&s" alt="brand" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
                            <span className="font-bold text-slate-900">DevUI</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Build better experiences with our modern UI platform.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-slate-900 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors font-medium"
                                    to="/"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors font-medium"
                                    to="/"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors font-medium"
                                    to="/"
                                >
                                    Affiliate Program
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-slate-900 mb-4">
                            Support
                        </h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors font-medium"
                                    to="/"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors font-medium"
                                    to="/"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors font-medium"
                                    to="/"
                                >
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-slate-900 mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors font-medium"
                                    to="/"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-slate-600 text-sm hover:text-blue-600 transition-colors font-medium"
                                    to="/"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-blue-100 pt-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-slate-600">
                        &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Twitter</a>
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">GitHub</a>
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer