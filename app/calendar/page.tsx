import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'Academic Calendar - Krelis Legacy College',
    description: 'Stay updated with important academic dates, holidays, and school events at Krelis Legacy College.',
};

export default function CalendarPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title="Academic Calendar"
                subtitle="Key Dates & Events"
                description="Keep track of term dates, holidays, and important school activities for the current academic session."
                height="md"
                centered={true}
            />

            {/* Current Session Info */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="container-max mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-navy-900 inline-block border-b-4 border-orange-500 pb-1">
                        2025/2026 Academic Session
                    </h2>
                </div>
            </section>

            {/* Term Dates Grid */}
            <section className="bg-gray-50 section-padding">
                <div className="container-max">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* First Term */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
                            <div className="bg-navy-900 py-3 px-6">
                                <h3 className="text-white font-bold text-lg uppercase tracking-wider">First Term</h3>
                            </div>
                            <div className="p-6 flex-grow space-y-4">
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Resumption</span>
                                    <p className="text-navy-800 font-medium">15th September, 2025</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Mid-Term Break</span>
                                    <p className="text-navy-800 font-medium">27th - 31st October, 2025</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Vacation</span>
                                    <p className="text-navy-800 font-medium">15th December, 2025</p>
                                </div>
                            </div>
                            <div className="bg-orange-50 py-3 px-6 text-center">
                                <span className="text-orange-600 font-bold text-sm">Status: UPCOMING</span>
                            </div>
                        </div>

                        {/* Second Term */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
                            <div className="bg-navy-800 py-3 px-6">
                                <h3 className="text-white font-bold text-lg uppercase tracking-wider">Second Term</h3>
                            </div>
                            <div className="p-6 flex-grow space-y-4">
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Resumption</span>
                                    <p className="text-navy-800 font-medium">12th January, 2026</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Mid-Term Break</span>
                                    <p className="text-navy-800 font-medium">23rd - 27th February, 2026</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Vacation</span>
                                    <p className="text-navy-800 font-medium">6th April, 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Third Term */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
                            <div className="bg-navy-700 py-3 px-6">
                                <h3 className="text-white font-bold text-lg uppercase tracking-wider">Third Term</h3>
                            </div>
                            <div className="p-6 flex-grow space-y-4">
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Resumption</span>
                                    <p className="text-navy-800 font-medium">27th April, 2026</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Mid-Term Break</span>
                                    <p className="text-navy-800 font-medium">8th - 12th June, 2026</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold text-gray-400 uppercase">Vacation</span>
                                    <p className="text-navy-800 font-medium">24th July, 2026</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Download Button */}
                    <div className="mt-12 text-center">
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 inline-block w-full max-w-2xl">
                            <h4 className="font-bold text-orange-800 mb-2">Want a printable version?</h4>
                            <p className="text-orange-700 text-sm mb-6">Download the full academic calendar in PDF format.</p>
                            <Button
                                href="/files/academic-calendar-2025-2026.pdf"
                                variant="primary"
                                size="lg"
                                className="shadow-lg transform hover:-translate-y-1 transition-transform"
                            >
                                <span className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12" />
                                    </svg>
                                    DOWNLOAD FULL CALENDAR (PDF)
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events List */}
            <section className="bg-white section-padding">
                <div className="container-max max-w-4xl">
                    <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Upcoming Events</h2>
                    <div className="space-y-4">
                        {[
                            { date: '15th Sept', day: 'Monday', title: 'Resumption for 1st Term', desc: 'All students are expected to resume.', iconColor: 'bg-green-100 text-green-600' },
                            { date: '1st Oct', day: 'Wednesday', title: 'Independence Day', desc: 'Public Holiday.', iconColor: 'bg-green-100 text-green-600' },
                            { date: '27th Oct', day: 'Monday', title: 'Mid-Term Break Begins', desc: 'One week break for all students.', iconColor: 'bg-blue-100 text-blue-600' },
                            { date: '12th Nov', day: 'Wednesday', title: 'Inter-House Sports', desc: 'Annual sports competition.', iconColor: 'bg-orange-100 text-orange-600' },
                            { date: '5th Dec', day: 'Friday', title: 'Christmas Carol / End of Year Party', desc: 'Celebration to mark the end of the year.', iconColor: 'bg-red-100 text-red-600' },
                            { date: '15th Dec', day: 'Monday', title: 'Vacation', desc: 'School closes for the term.', iconColor: 'bg-gray-100 text-gray-600' },
                        ].map((event, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 flex items-center mb-4 md:mb-0 md:mr-6 w-32">
                                    <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center font-bold ${event.iconColor} mr-4`}>
                                        <span className="text-xs uppercase">{event.date.split(' ')[1]}</span>
                                        <span className="text-lg leading-none">{event.date.split(' ')[0].replace(/\D/g, '')}</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-navy-900">{event.date}</span>
                                        <span className="text-xs text-gray-500 uppercase">{event.day}</span>
                                    </div>
                                </div>
                                <div className="flex-grow pl-0 md:pl-6 border-l-0 md:border-l border-gray-100">
                                    <h4 className="text-lg font-bold text-navy-800">{event.title}</h4>
                                    <p className="text-gray-600 text-sm mt-1">{event.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
