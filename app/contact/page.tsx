import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Krelis Legacy School',
    description: 'Get in touch with Krelis Legacy School. Contact our admissions office, find our location, or send us a message.',
};

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title="Contact Us"
                subtitle="Get in Touch"
                description="We are here to answer any questions you may have about our programs, admissions, or school life."
                height="md"
                centered={true}
            />

            <div className="container-max section-padding">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Contact Info & Map */}
                    <div className="space-y-12">

                        {/* Contact Info Cards */}
                        <div className="grid gap-6">

                            {/* Phone */}
                            <a
                                href="tel:+234***********"
                                className="flex items-center p-6 bg-white border-2 border-navy-500 rounded-xl hover:shadow-lg transition-shadow group"
                            >
                                <div className="p-4 bg-orange-50 rounded-full mr-6 group-hover:bg-orange-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Phone Number</h3>
                                    <p className="text-gray-600 font-medium">+234 *** *** ****</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:**********@gmail.com"
                                className="flex items-center p-6 bg-white border-2 border-navy-500 rounded-xl hover:shadow-lg transition-shadow group"
                            >
                                <div className="p-4 bg-orange-50 rounded-full mr-6 group-hover:bg-orange-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Email Address</h3>
                                    <p className="text-gray-600 font-medium">********@gmail.com</p>
                                </div>
                            </a>

                            {/* Address */}
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-6 bg-white border-2 border-navy-500 rounded-xl hover:shadow-lg transition-shadow group"
                            >
                                <div className="p-4 bg-orange-50 rounded-full mr-6 group-hover:bg-orange-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">School Address</h3>
                                    <p className="text-gray-600 font-medium">
                                        18 Atinmo Street, Ikosi-Ketu,<br />
                                        Lagos State.<br />
                                        **, Aladelola Street, Ikosi-Ketu,<br />
                                        Lagos State.
                                    </p>
                                </div>
                            </a>

                        </div>

                        {/* Google Map Embed */}
                        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md border border-gray-200">
                            {/* Using a placeholder iframe for demonstration. Ideally, replace src with the real embed URL. */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8231788469304!2d3.3862282!3d6.5631947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d97e8df14e1%3A0x6f9e1b8c5d6f8e9a!2sAtinmo%20St%2C%20Ikosi-Ketu%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Map Location"
                            ></iframe>
                        </div>

                    </div>

                    {/* Right Column: Contact Form */}
                    <ContactForm />

                </div>
            </div>
        </div>
    );
}

