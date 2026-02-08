import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Button from '@/components/Button';

export const metadata: Metadata = {
    title: 'Academics - Krelis Legacy College',
    description: 'Explore our comprehensive curriculum, from Early Years to Secondary School, designed to foster academic excellence and innovation.',
};

export default function AcademicsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title="Academic Excellence"
                subtitle="Nurturing Minds"
                description="Our rigorous and holistic curriculum is designed to challenge students, inspire creativity, and prepare them for success in a global society."
                height="md"
                centered={true}
            />

            {/* Introduction */}
            <section className="bg-white text-center section-padding">
                <div className="container-max max-w-4xl">
                    <h2 className="text-3xl font-bold text-navy-900 mb-6">A Pathway to Success</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        At Krelis Legacy College, we believe education is a journey. We provide a structured yet flexible learning pathway that adapts to the developmental needs of students at every stage. Our curriculum blends national requirements with international best practices.
                    </p>
                </div>
            </section>

            {/* Curriculum Sections */}
            <div className="py-8 bg-gray-50">
                {/* Early Years */}
                <section id="early-years" className="py-12 px-4 md:px-8">
                    <div className="container-max flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg bg-orange-100 flex items-center justify-center">
                                <span className="text-orange-500 font-bold text-xl">Early Years Image</span>
                                {/* <Image src="/images/early-years.jpg" alt="Early Years" fill className="object-cover" /> */}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-orange-500 font-bold uppercase tracking-wider mb-2">Early Years Foundation</h3>
                            <h2 className="text-3xl font-bold text-navy-900 mb-4">Play, Explore, Learn</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our Early Years program creates a safe and stimulating environment where toddlers and nursery students develop social skills, emotional intelligence, and basic literacy and numeracy through play-based learning.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Montessori-inspired activities</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Focus on sensory development</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Creative arts and music</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Primary */}
                <section id="primary" className="py-12 px-4 md:px-8">
                    <div className="container-max flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg bg-navy-100 flex items-center justify-center">
                                <span className="text-navy-500 font-bold text-xl">Primary School Image</span>
                                {/* <Image src="/images/primary.jpg" alt="Primary School" fill className="object-cover" /> */}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-navy-500 font-bold uppercase tracking-wider mb-2">Primary Education</h3>
                            <h2 className="text-3xl font-bold text-navy-900 mb-4">Building Strong Foundations</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                In Primary School, we focus on solidifying core academic skills while encouraging curiosity. Students engage in project-based learning that connects classroom concepts to the real world.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-navy-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Comprehensive Numeracy & Literacy</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-navy-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Introduction to ICT & Coding</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-navy-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Character Education Program</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Secondary */}
                <section id="secondary" className="py-12 px-4 md:px-8">
                    <div className="container-max flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg bg-orange-100 flex items-center justify-center">
                                <span className="text-orange-500 font-bold text-xl">Secondary School Image</span>
                                {/* <Image src="/images/secondary.jpg" alt="Secondary School" fill className="object-cover" /> */}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-orange-500 font-bold uppercase tracking-wider mb-2">Secondary Education</h3>
                            <h2 className="text-3xl font-bold text-navy-900 mb-4">Preparing for the Future</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our Secondary curriculum prepares students for national and international examinations (JSSCE, WAEC, NECO, IGCSE/SAT). We emphasize critical thinking, independent research, and leadership skills.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Science, Arts & Commercial Departments</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Robust Laboratory Practicals</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Career Counseling & Guidance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* Departments */}
            <section className="bg-white section-padding">
                <div className="container-max">
                    <div className="text-center mb-12">
                        <span className="text-navy-500 font-semibold uppercase tracking-wider text-sm">Key Departments</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-navy-900">Academic Departments</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Science */}
                        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-navy-900 mb-3">Science & Mathematics</h3>
                            <p className="text-gray-600 text-sm mb-4">Biology, Chemistry, Physics, Mathematics, Further Mathematics, Computer Science.</p>
                            <span className="inline-block px-3 py-1 bg-navy-100 text-navy-600 text-xs font-bold rounded-full">STEM Focus</span>
                        </div>
                        {/* Humanities */}
                        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-navy-900 mb-3">Humanities & Arts</h3>
                            <p className="text-gray-600 text-sm mb-4">English Language, Literature, Government, History, Christian Religious Studies.</p>
                            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">Critical Thinking</span>
                        </div>
                        {/* Commercial */}
                        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-navy-900 mb-3">Commercial Studies</h3>
                            <p className="text-gray-600 text-sm mb-4">Accounting, Commerce, Economics, Business Studies, Financial Literacy.</p>
                            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">Business Skills</span>
                        </div>
                        {/* Vocational */}
                        <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-navy-900 mb-3">Vocational & Technical</h3>
                            <p className="text-gray-600 text-sm mb-4">Technical Drawing, Basic Technology, Home Economics, Entrepreneurship.</p>
                            <span className="inline-block px-3 py-1 bg-navy-100 text-navy-600 text-xs font-bold rounded-full">Practical Skills</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-navy-900 text-white text-center section-padding">
                <div className="container-max max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">Ready to Enroll Your Child?</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Give your child the gift of quality education. Admission is ongoing for the next academic session.
                    </p>
                    <Button
                        variant="secondary"
                        size="lg"
                        href="/admissions"
                    >
                        Admissions Info
                    </Button>
                </div>
            </section>
        </div>
    );
}
