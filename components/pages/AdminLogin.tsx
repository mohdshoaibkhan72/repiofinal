import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import logo from '../../logo.png';

export const AdminLogin: React.FC = () => {
    // Pre-fill credentials for demo access as requested
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('admin1234');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate network delay for effect
        setTimeout(() => {
            if (username === 'admin' && password === 'admin1234') {
                localStorage.setItem('isAdminAuthenticated', 'true');
                navigate('/admin/dashboard');
            } else {
                setError('Invalid username or password');
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#0B1F3B] -skew-y-3 origin-top-left transform -translate-y-12"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-md w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10 animate-fade-in-up">
                {/* Header Section */}
                <div className="bg-white p-8 pb-0 text-center">
                    <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 shadow-sm transform transition-transform hover:scale-110 duration-300">
                        <ShieldCheck className="w-8 h-8 text-rupivo-blue" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#0B1F3B] tracking-tight mb-1">
                        Admin Portal
                    </h2>
                    <p className="text-sm text-gray-500 font-medium">
                        Secure access for authorized personnel
                    </p>
                </div>

                {/* Login Form */}
                <form className="p-8 pt-6 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        {/* Username Input */}
                        <div className="group">
                            <label htmlFor="username" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 ml-1">Username</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-rupivo-blue transition-colors" />
                                </div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 focus:border-rupivo-blue transition-all duration-200 sm:text-sm text-gray-700 font-medium"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="group">
                            <label htmlFor="password" className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 ml-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-rupivo-blue transition-colors" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 focus:border-rupivo-blue transition-all duration-200 sm:text-sm text-gray-700 font-medium"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100 animate-shake">
                            <AlertCircle size={16} />
                            <span className="font-medium">{error}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0B1F3B] hover:bg-[#1a2e4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B1F3B] shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <>
                                Access Dashboard
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="px-8 pb-8 text-center">
                    <p className="text-xs text-gray-400">
                        Authorized use only. All activities are monitored.
                    </p>
                </div>
            </div>
        </div>
    );
};
