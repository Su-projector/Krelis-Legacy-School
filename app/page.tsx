import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import HomeHeroSlideshow from '@/components/HomeHeroSlideshow';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Krelis Legacy College - Welcome',
    description: 'Welcome to Krelis Legacy School. Resumption Date: 15th Sept 2025.',
};

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* HERO SECTION */}
            <section className="text-center pt-8 pb-4 px-4 bg-white">
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                    Welcome to Krelis<br />Legacy School
                </h1>

                {/* School Building Image */}
                <div className="relative w-full max-w-2xl mx-auto h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-sm mb-8">
                    <HomeHeroSlideshow images={['/images/building_1.jpg']} />
                </div>
            </section>

            {/* QUICK NAVIGATION CARDS */}
            <section className="px-4 pb-8">
                <div className="container-max grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                    {/* Admissions */}
                    <Link href="/admissions" className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </span>
                            <span className="font-bold text-orange-500 uppercase text-sm md:text-base">ADMISSIONS</span>
                        </div>
                    </Link>

                    {/* About Us */}
                    <Link href="/about" className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-navy-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </span>
                            <span className="font-bold text-navy-900 uppercase text-sm md:text-base">ABOUT US</span>
                        </div>
                    </Link>

                    {/* Academics */}
                    <Link href="/academics" className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-navy-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </span>
                            <span className="font-bold text-navy-900 uppercase text-sm md:text-base">ACADEMICS</span>
                        </div>
                    </Link>

                    {/* Contact */}
                    <Link href="/contact" className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-row items-center space-x-2">
                            <span className="text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z" />
                                </svg>
                            </span>
                            <span className="font-bold text-orange-500 uppercase text-sm md:text-base">CONTACT</span>
                        </div>
                    </Link>

                </div>
            </section>

            {/* RESUMPTION DATE */}
            <section className="text-center py-8 bg-white">
                <h3 className="text-orange-500 text-xl md:text-2xl font-bold mb-2">
                    Resumption Date
                </h3>
                <p className="text-orange-500 text-3xl md:text-4xl font-extrabold mb-8">
                    15th Sept 2025
                </p>
                <div className="flex justify-center">
                    <Button
                        href="/calendar"
                        variant="primary"
                        className="bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide text-sm md:text-base shadow-lg"
                    >
                        VIEW CALENDAR
                    </Button>
                </div>
            </section>

        </div>
    );
}

