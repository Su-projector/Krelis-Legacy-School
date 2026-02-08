import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Admissions - Krelis Legacy College',
    description: 'Join the Krelis Legacy College community. Learn about our admission process, requirements, and download the application form.',
};

export default function AdmissionsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title="Join Our Community"
                subtitle="Admissions & Enrollment"
                description="We are excited to welcome new families to Krelis Legacy College. Our admission process is designed to be simple, transparent, and supportive."
                height="md"
                centered={true}
            />

            {/* Introduction */}
            <section className="bg-white text-center section-padding">
                <div className="container-max max-w-4xl">
                    <h2 className="text-3xl font-bold text-navy-900 mb-6">Begin Your Journey With Us</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Enrolling your child at KLC is the first step towards a bright future. We accept applications for Early Years, Primary, and Secondary sections. Admission is open to all students irrespective of race, religion, or nationality.
                    </p>
                </div>
            </section>

            {/* Step-by-Step Process */}
            <section className="bg-gray-50 section-padding">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">How to Apply</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-navy-900">Admission Process</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-navy-500 text-center relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-navy-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-gray-50">
                                1
                            </div>
                            <div className="mt-6 mb-4 flex justify-center text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Purchase Form</h3>
                            <p className="text-gray-600 text-sm">
                                Obtain the admission form from the school admin office or download it directly from our website below.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500 text-center relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-gray-50">
                                2
                            </div>
                            <div className="mt-6 mb-4 flex justify-center text-navy-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Submit Documents</h3>
                            <p className="text-gray-600 text-sm">
                                Return the completed form along with 2 passport photographs, birth certificate, and previous academic records.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-navy-500 text-center relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-navy-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-gray-50">
                                3
                            </div>
                            <div className="mt-6 mb-4 flex justify-center text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Entrance Exam</h3>
                            <p className="text-gray-600 text-sm">
                                The child will sit for a placement test (Entrance Examination) to determine their academic readiness.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500 text-center relative group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-gray-50">
                                4
                            </div>
                            <div className="mt-6 mb-4 flex justify-center text-navy-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Interview & Offer</h3>
                            <p className="text-gray-600 text-sm">
                                Successful candidates and parents attend a brief interview. An offer letter is issued upon success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="bg-white section-padding">
                <div className="container-max flex flex-col md:flex-row gap-12">

                    {/* Documents List */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6 border-b-2 border-orange-100 pb-2 inline-block">Required Documents</h3>
                        <ul className="space-y-4">
                            {[
                                'Completed Admission Form',
                                '2 Recent Passport Photographs',
                                'Copy of Birth Certificate',
                                'Previous Term\'s Report Card (for transfer students)',
                                'Medical Report / Immunization Record',
                                'Letter of Recommendation (Secondary School)',
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-gray-700 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Age Requirements */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-navy-900 mb-6 border-b-2 border-orange-100 pb-2 inline-block">Age Guidelines</h3>
                        <div className="space-y-4">
                            {[
                                { class: 'Creche / Playgroup', age: '18 Months - 2 Years' },
                                { class: 'Nursery 1-2', age: '3 - 4 Years' },
                                { class: 'Primary 1', age: '5 - 6 Years' },
                                { class: 'JSS 1 (Secondary)', age: '10 - 11 Years' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center p-4 bg-navy-50 rounded-lg border-l-4 border-navy-500">
                                    <span className="font-bold text-navy-900">{item.class}</span>
                                    <span className="text-sm font-semibold bg-white text-navy-600 px-3 py-1 rounded-full shadow-sm">
                                        {item.age}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-orange-50 p-6 rounded-xl border border-orange-200 text-center">
                            <h4 className="font-bold text-orange-800 mb-2">Admissions are Open. Apply Online for Free.</h4>
                            <p className="text-orange-700 text-sm mb-6">Start your application process today from the comfort of your home.</p>

                            {/* Fill Online Form Button */}
                            <Button
                                href="/admissions/apply"
                                variant="primary"
                                size="lg"
                                className="w-full md:w-auto shadow-xl transform hover:-translate-y-1 transition-transform bg-navy-500 text-white border-2 border-navy-500 hover:bg-navy-600"
                            >
                                <span className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    FILL ONLINE FORM
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help CTA */}
            <section className="bg-navy-900 text-white text-center section-padding">
                <div className="container-max max-w-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <h2 className="text-3xl font-bold mb-4">Need Help with Admissions?</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Our friendly admissions team is here to guide you through every step of the process. Feel free to contact us.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            href="tel:+2348012345678"
                            className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500"
                            size="lg"
                        >
                            Call Admissions Office
                        </Button>
                        <Button
                            href="/contact"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-navy-900"
                            size="lg"
                        >
                            Contact Us Online
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
