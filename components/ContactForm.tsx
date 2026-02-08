'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-8">Fill the form below and we will get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-orange-500">*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-orange-500">*</span></label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="Enter your phone number"
                    />
                </div>

                {/* Email (Optional) */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message <span className="text-orange-500">*</span></label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors resize-none"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-4 text-white font-bold rounded-lg uppercase tracking-wide shadow-md transition-all
          ${status === 'submitting' ? 'bg-navy-400 cursor-not-allowed' : 'bg-navy-500 hover:bg-navy-600 hover:shadow-lg'}
        `}
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Success Message */}
                {status === 'success' && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-center animate-pulse">
                        Message sent successfully! We will contact you soon.
                    </div>
                )}

            </form>
        </div>
    );
}
