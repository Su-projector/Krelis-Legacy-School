'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Navigation links - easily editable
const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/calendar', label: 'Calendar' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-full">
            <div className="container-max mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and School Name */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        {/* Logo Icon */}
                        <div className="relative w-12 h-12 overflow-hidden rounded-full group-hover:ring-2 group-hover:ring-orange-500 transition-all duration-300">
                            <Image
                                src="/images/Logo.jpg"
                                alt="Krelis Legacy College Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="block ml-2">
                            <h1 className="text-navy-500 font-bold text-lg md:text-xl leading-tight">
                                Krelis Legacy
                            </h1>
                            <p className="text-orange-500 text-xs md:text-sm font-medium">College</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-navy-500 font-medium hover:text-orange-500 transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Apply Now CTA Button - Desktop */}
                    <Link
                        href="/admissions"
                        className="hidden lg:inline-flex btn-secondary"
                    >
                        Apply Now
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 rounded-lg text-navy-500 hover:bg-gray-100 transition-colors duration-300"
                        onClick={toggleMobileMenu}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="py-4 space-y-2" aria-label="Mobile navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 text-navy-500 font-medium hover:bg-gray-50 hover:text-orange-500 rounded-lg transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2 px-4">
                            <Link
                                href="/admissions"
                                className="block w-full text-center btn-secondary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Apply Now
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

/*
 * Component Notes:
 * ----------------
 * - navLinks array: Edit to add/remove/reorder navigation items
 * - Logo section: Update the 'KL' initials and school name as needed
 * - Responsive breakpoint: lg (1024px) for desktop/mobile switch
 * - All hover effects use orange accent color
 * - Mobile menu uses animated slide-down with opacity transition
 */
