import React, { useEffect, useState } from 'react';

interface Application {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    loanAmount: number;
    purpose: string;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: string;
}

import { useNavigate } from 'react-router-dom';

export const AdminPanel: React.FC = () => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
        if (isAuthenticated !== 'true') {
            navigate('/admin');
        } else {
            fetchApplications();
        }
    }, [navigate]);

    const fetchApplications = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/applications');
            const data = await res.json();
            setApplications(data);
        } catch (err) {
            console.error('Failed to fetch applications', err);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            await fetch(`http://localhost:5000/api/applications/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });
            fetchApplications(); // Refresh list
        } catch (err) {
            console.error('Failed to update status', err);
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading admin panel...</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard - Loan Applications</h1>

                <div className="bg-white shadow overflow-hidden rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {applications.length === 0 ? (
                            <li className="p-6 text-center text-gray-500">No applications found.</li>
                        ) : (
                            applications.map((app) => (
                                <li key={app._id} className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center">
                                                <p className="text-lg font-medium text-rupivo-blue truncate">{app.fullName}</p>
                                                <span className={`ml-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${app.status === 'approved' ? 'bg-green-100 text-green-800' :
                                                        app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                            'bg-yellow-100 text-yellow-800'}`}>
                                                    {app.status.toUpperCase()}
                                                </span>
                                            </div>
                                            <div className="mt-2 sm:flex sm:justify-between">
                                                <div className="sm:flex">
                                                    <p className="flex items-center text-sm text-gray-500 mr-6">
                                                        📧 {app.email}
                                                    </p>
                                                    <p className="flex items-center text-sm text-gray-500 mr-6">
                                                        📱 {app.phone}
                                                    </p>
                                                    <p className="flex items-center text-sm text-gray-500">
                                                        💰 ₹{app.loanAmount}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Purpose: {app.purpose || 'N/A'}
                                            </p>
                                            <p className="mt-1 text-xs text-gray-400">
                                                Date: {new Date(app.createdAt).toLocaleString()}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {app.status === 'pending' && (
                                                <>
                                                    <button
                                                        onClick={() => updateStatus(app._id, 'approved')}
                                                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(app._id, 'rejected')}
                                                        className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                                                    >
                                                        Reject
                                                    </button>
                                                </>
                                            )}
                                            {app.status !== 'pending' && (
                                                <button
                                                    onClick={() => updateStatus(app._id, 'pending')}
                                                    className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
                                                >
                                                    Reset
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};
