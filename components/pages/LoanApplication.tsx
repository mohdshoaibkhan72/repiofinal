import React, { useState } from 'react';
import { api } from '../../services/api';

export const LoanApplication: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        loanAmount: '',
        purpose: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await api.applications.create(formData);
            setStatus('success');
            setFormData({ fullName: '', email: '', phone: '', loanAmount: '', purpose: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-105 duration-300">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">Apply for a Loan</h2>
                    <p className="mt-2 text-sm text-gray-600">Get instant approval in minutes</p>
                </div>

                {status === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-green-800">Application submitted successfully! We will contact you soon.</p>
                                <button onClick={() => setStatus('idle')} className="mt-2 text-sm text-green-600 hover:text-green-500 font-medium">Apply again</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount (₹)</label>
                            <input
                                id="loanAmount"
                                name="loanAmount"
                                type="number"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={formData.loanAmount}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose of Loan</label>
                            <textarea
                                id="purpose"
                                name="purpose"
                                rows={3}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                value={formData.purpose}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rupivo-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rupivo-blue transition-colors duration-200 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                        </button>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};
