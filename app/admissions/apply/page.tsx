'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

export default function AdmissionFormPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        classApplyingFor: '',
        previousSchool: '',
        birthCertificate: null as File | null,
        lastSchoolResult: null as File | null,
        passportPhotograph: null as File | null,
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            // Reset status after 5 seconds but keep visible for user feedback
            setTimeout(() => setStatus('idle'), 5000);
            handleReset(); // Clear form on success
        }, 2000);
    };

    const handleReset = () => {
        setFormData({
            fullName: '',
            dateOfBirth: '',
            gender: '',
            parentName: '',
            email: '',
            phone: '',
            address: '',
            classApplyingFor: '',
            previousSchool: '',
            birthCertificate: null,
            lastSchoolResult: null,
            passportPhotograph: null,
        });
        // Reset file inputs manually if needed, but react state handles values
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title="Online Application"
                subtitle="Start Your Journey"
                description="Complete the form below to begin the admission process for your child."
                height="md"
                centered={true}
            />

            <div className="container-max section-padding">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-navy-900 px-8 py-6 border-b-4 border-orange-500">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Admission Application Form</h2>
                        <p className="text-gray-300 text-sm mt-1">Please fill all required fields correctly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                        {/* Section 1: Personal Information */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-navy-900 border-b pb-2">Student Information</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="md:col-span-2">
                                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                                        placeholder="Surname Firstname MiddleName"
                                    />
                                </div>

                                {/* Date of Birth */}
                                <div>
                                    <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                                    <input
                                        type="date"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        required
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                                    />
                                </div>

                                {/* Gender */}
                                <div>
                                    <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">Gender <span className="text-red-500">*</span></label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        required
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Parent/Guardian Information */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-navy-900 border-b pb-2">Guardian Information</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Parent Name */}
                                <div className="md:col-span-2">
                                    <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">Parent/Guardian Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="parentName"
                                        name="parentName"
                                        required
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                                        placeholder="Mr. & Mrs. Parent Name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                                        placeholder="parent@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                                        placeholder="+234..."
                                    />
                                </div>

                                {/* Address */}
                                <div className="md:col-span-2">
                                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Residential Address <span className="text-red-500">*</span></label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        required
                                        rows={3}
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors resize-none"
                                        placeholder="Enter full home address"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Academic Information */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-navy-900 border-b pb-2">Academic History</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Class Applying For */}
                                <div>
                                    <label htmlFor="classApplyingFor" className="block text-sm font-semibold text-gray-700 mb-2">Class Applying For <span className="text-red-500">*</span></label>
                                    <select
                                        id="classApplyingFor"
                                        name="classApplyingFor"
                                        required
                                        value={formData.classApplyingFor}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-white"
                                    >
                                        <option value="">Select Class</option>
                                        <optgroup label="Early Years">
                                            <option value="Creche">Creche / Playgroup</option>
                                            <option value="Nursery 1">Nursery 1</option>
                                            <option value="Nursery 2">Nursery 2</option>
                                        </optgroup>
                                        <optgroup label="Primary">
                                            <option value="Primary 1">Primary 1</option>
                                            <option value="Primary 2">Primary 2</option>
                                            <option value="Primary 3">Primary 3</option>
                                            <option value="Primary 4">Primary 4</option>
                                            <option value="Primary 5">Primary 5</option>
                                            <option value="Primary 6">Primary 6</option>
                                        </optgroup>
                                        <optgroup label="Secondary">
                                            <option value="JSS 1">JSS 1</option>
                                            <option value="JSS 2">JSS 2</option>
                                            <option value="JSS 3">JSS 3</option>
                                            <option value="SS 1">SS 1</option>
                                            <option value="SS 2">SS 2</option>
                                            <option value="SS 3">SS 3</option>
                                        </optgroup>
                                    </select>
                                </div>

                                {/* Previous School */}
                                <div>
                                    <label htmlFor="previousSchool" className="block text-sm font-semibold text-gray-700 mb-2">Previous School Attended</label>
                                    <input
                                        type="text"
                                        id="previousSchool"
                                        name="previousSchool"
                                        value={formData.previousSchool}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                                        placeholder="Name of last school"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Document Uploads */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-navy-900 border-b pb-2">Upload Documents</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Birth Certificate */}
                                <div>
                                    <label htmlFor="birthCertificate" className="block text-sm font-semibold text-gray-700 mb-2">Birth Certificate <span className="text-red-500">*</span></label>
                                    <input
                                        type="file"
                                        id="birthCertificate"
                                        name="birthCertificate"
                                        required
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-gray-50"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max 2MB)</p>
                                </div>

                                {/* Last School Result */}
                                <div>
                                    <label htmlFor="lastSchoolResult" className="block text-sm font-semibold text-gray-700 mb-2">Last School Result <span className="text-red-500">*</span></label>
                                    <input
                                        type="file"
                                        id="lastSchoolResult"
                                        name="lastSchoolResult"
                                        required
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-gray-50"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max 2MB)</p>
                                </div>

                                {/* Passport Photograph */}
                                <div>
                                    <label htmlFor="passportPhotograph" className="block text-sm font-semibold text-gray-700 mb-2">Passport Photograph <span className="text-red-500">*</span></label>
                                    <input
                                        type="file"
                                        id="passportPhotograph"
                                        name="passportPhotograph"
                                        required
                                        accept=".jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors bg-gray-50"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">JPG, PNG (Max 2MB)</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-gray-100">
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`flex-1 py-4 text-white font-bold rounded-lg uppercase tracking-wide shadow-md transition-all text-center
                                ${status === 'submitting'
                                        ? 'bg-navy-400 cursor-not-allowed'
                                        : 'bg-navy-500 border-b-4 border-orange-500 hover:bg-navy-600 hover:shadow-lg hover:-translate-y-0.5'}
                                `}
                            >
                                {status === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
                            </button>

                            <button
                                type="button"
                                onClick={handleReset}
                                disabled={status === 'submitting'}
                                className="md:w-1/3 py-4 bg-gray-200 text-gray-700 font-bold rounded-lg uppercase tracking-wide shadow-sm hover:bg-gray-300 transition-all text-center"
                            >
                                Reset Form
                            </button>
                        </div>

                        {/* Success Message */}
                        {status === 'success' && (
                            <div className="p-6 bg-green-50 text-green-800 rounded-xl border border-green-200 text-center animate-fade-in-up shadow-sm">
                                <h4 className="text-xl font-bold mb-2">Application Submitted Successfully!</h4>
                                <p>Thank you for applying to Krelis Legacy College. Our admissions team will review your application and contact you shortly via email.</p>
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </div>
    );
}
