import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - Krelis Legacy College',
    description: 'Terms of Service for Krelis Legacy School. Review the terms and conditions for using our website.',
};

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen">
            <main className="section-padding">
                <div className="container-max max-w-4xl">
                    {/* Page Title */}
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">Terms of Service</h1>
                        <p className="text-gray-600 text-sm">Krelis Legacy School</p>
                        <p className="text-gray-500 text-sm mt-1">Last updated: February 9, 2026</p>
                    </header>

                    {/* Introduction */}
                    <section className="mb-8">
                        <p className="text-gray-700 leading-relaxed">
                            By accessing or using the Krelis Legacy School website, you agree to the terms outlined below. If you do not agree, please discontinue use of the website.
                        </p>
                    </section>

                    {/* Website Use */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Website Use</h2>
                        <p className="text-gray-700 leading-relaxed">
                            This website is intended to provide information about Krelis Legacy School, its academic programs, admissions, and activities. Content may be updated at any time without notice.
                        </p>
                    </section>

                    {/* Accuracy of Information */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Accuracy of Information</h2>
                        <p className="text-gray-700 leading-relaxed">
                            While we strive for accuracy, Krelis Legacy School does not guarantee that all content is always current or error-free.
                        </p>
                    </section>

                    {/* Intellectual Property */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Intellectual Property</h2>
                        <p className="text-gray-700 leading-relaxed">
                            All content on this website, including text, images, logos, and graphics, is the property of Krelis Legacy School and may not be copied, reproduced, or distributed without written permission.
                        </p>
                    </section>

                    {/* User Conduct */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">User Conduct</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">Users agree not to:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Misuse the website or its content</li>
                            <li>Attempt unauthorized access to systems or data</li>
                            <li>Submit false or misleading information</li>
                        </ul>
                    </section>

                    {/* External Links */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">External Links</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our website may contain links to third-party websites. Krelis Legacy School is not responsible for the content or privacy practices of those sites.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Krelis Legacy School is not liable for any direct or indirect damages arising from the use of this website.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Governing Law</h2>
                        <p className="text-gray-700 leading-relaxed">
                            These terms are governed by the applicable laws of the Federal Republic of Nigeria.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact</h2>
                        <p className="text-gray-700 leading-relaxed">
                            For questions regarding these Terms of Service, please contact:{' '}
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
