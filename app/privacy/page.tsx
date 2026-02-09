import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Krelis Legacy College',
    description: 'Privacy Policy for Krelis Legacy School. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen">
            <main className="section-padding">
                <div className="container-max max-w-4xl">
                    {/* Page Title */}
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">Privacy Policy</h1>
                        <p className="text-gray-600 text-sm">Krelis Legacy School</p>
                        <p className="text-gray-500 text-sm mt-1">Last updated: February 9, 2026</p>
                    </header>

                    {/* Introduction */}
                    <section className="mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            Krelis Legacy School is committed to protecting the privacy and personal information of students, parents, guardians, staff, and website visitors. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website or services.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Information We Collect</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">We may collect the following information:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Personal details such as name, email address, phone number, and home address</li>
                            <li>Student and parent information submitted through admission or contact forms</li>
                            <li>Website usage data such as pages visited and device type (for analytics and improvement purposes)</li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">The information we collect is used to:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Process admissions and enrollment inquiries</li>
                            <li>Communicate important school updates and announcements</li>
                            <li>Improve our website and educational services</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>
                    </section>

                    {/* Information Protection */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Protection</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We take appropriate technical and organizational measures to safeguard your personal information against unauthorized access, loss, or misuse.
                        </p>
                    </section>

                    {/* Information Sharing */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Sharing</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Krelis Legacy School does not sell or rent personal information. Data may only be shared with trusted service providers when necessary for school operations or when required by law.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Children's Privacy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We take children's privacy seriously. Information relating to students is handled with strict confidentiality and only collected with parental or guardian consent.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights</h2>
                        <p className="text-gray-700 leading-relaxed">
                            You may request access to, correction of, or deletion of your personal information by contacting the school administration.
                        </p>
                    </section>

                    {/* Policy Updates */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Policy Updates</h2>
                        <p className="text-gray-700 leading-relaxed">
                            This Privacy Policy may be updated periodically. Any changes will be published on this page.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact</h2>
                        <p className="text-gray-700 leading-relaxed">
                            For privacy-related inquiries, please contact:{' '}
                            <a href="mailto:info@krelislegacy.edu" className="text-orange-500 hover:text-orange-600 underline">
                                info@krelislegacy.edu
                            </a>
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
