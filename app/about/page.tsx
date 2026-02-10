import Image from 'next/image';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
    title: 'About Us - Krelis Legacy College',
    description: 'Learn about our mission, vision, values, and the leadership team at Krelis Legacy College.',
};

export default function AboutPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title="About Us"
                subtitle="Who We Are"
                description="Krelis Legacy College is a premier educational institution committed to nurturing future leaders through academic excellence and character development."
                height="md"
                centered={true}
            />

            {/* Mission & Vision Section */}
            <section className="bg-white section-padding">
                <div className="container-max grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-navy-50 p-8 rounded-2xl border-l-4 border-navy-500 shadow-sm animate-fade-in-up">
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-navy-100 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-navy-900">Our Mission</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            To provide a transformative educational experience that empowers students to become confident, compassionate, and capable leaders who make positive contributions to society.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-500 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center mb-4">
                            <div className="p-3 bg-orange-100 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-navy-900">Our Vision</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            To be a globally recognized institution of excellence, nurturing a generation of innovative thinkers and ethical leaders who will shape the future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-navy-900 text-white section-padding">
                <div className="container-max text-center">
                    <span className="text-orange-400 font-semibold uppercase tracking-wider text-sm">What Drives Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Our Core Values</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { title: 'Excellence', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
                            { title: 'Integrity', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                            { title: 'Discipline', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                            { title: 'Innovation', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
                        ].map((value, idx) => (
                            <div key={idx} className="p-6 bg-navy-800 rounded-xl hover:bg-navy-700 transition-colors duration-300 group">
                                <div className="mx-auto w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg">{value.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principal's Welcome */}
            <section className="bg-gray-50 section-padding">
                <div className="container-max">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-12">
                        {/* Principal Image Text */}
                        <div className="w-full md:w-1/3 flex-shrink-0 text-center md:text-left">
                            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl mb-4">
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                    {/* Placeholder Image */}
                                    <span>Director Photo</span>
                                </div>
                                {/*
                                <Image 
                                    src="/images/director.jpg" 
                                    alt="Director" 
                                    fill
                                    className="object-cover"
                                />
                                */}
                            </div>
                            <h3 className="text-xl font-bold text-navy-900">Mr. Abayomi O. Kareem</h3>
                            <p className="text-orange-500 font-medium">Director & Founder</p>
                        </div>

                        {/* Welcome Message */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold text-navy-900 mb-6">Welcome from the Director</h2>
                            <div className="text-gray-600 space-y-4 leading-relaxed">
                                <p>
                                    Welcome to Krelis Legacy School! It is my profound privilege to lead this exceptional community of learners, educators, and families. Since our inception, we have been guided by a singular mission: to nurture the unique potential within every child.
                                </p>
                                <p>
                                    At KLS, we believe that education is not just about academic rigor but about building character, resilience, and a lifelong love for learning. Our dedicated faculty works tirelessly to create an environment where students feel safe to explore, question, and grow.
                                </p>
                                <p>
                                    We invite you to join us on this exciting journey. Together, we are building a legacy of excellence for generations to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
