import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="w-full mt-12 py-12" style={{background: 'linear-gradient(180deg, rgba(14,165,164,0.03), transparent)'}}>
            <div className="w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <div>
                            <p className="text-sm text-[var(--muted)]">
                                &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                                    to="/"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                                    to="/"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                                    to="/"
                                >
                                    Affiliate Program
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">
                            Support
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                                    to="/"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                                    to="/"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                                    to="/"
                                >
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                                    to="/"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
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