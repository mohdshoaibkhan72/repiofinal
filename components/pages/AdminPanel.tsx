// ... imports
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

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

interface Partner {
    _id: string;
    firstName: string;
    lastName: string;
    mobile: string;
    city: string;
    profession: string;
    createdAt: string;
}

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: 'unread' | 'read' | 'replied';
    createdAt: string;
}

export const AdminPanel: React.FC = () => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [partners, setPartners] = useState<Partner[]>([]);
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'applications' | 'partners' | 'contacts'>('applications');
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
        if (isAuthenticated !== 'true') {
            navigate('/admin');
        } else {
            fetchData();
        }
    }, [navigate]);

    const fetchData = async () => {
        try {
            const [appsData, partnersData, contactsData] = await Promise.all([
                api.applications.getAll(),
                api.partners.getAll(),
                api.contacts.getAll()
            ]);
            setApplications(appsData);
            setPartners(partnersData);
            setContacts(contactsData);
        } catch (err) {
            console.error('Failed to fetch data', err);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            await api.applications.updateStatus(id, newStatus);
            fetchData(); // Refresh list
        } catch (err) {
            console.error('Failed to update status', err);
        }
    };

    const updateContactStatus = async (id: string, newStatus: string) => {
        try {
            await api.contacts.updateStatus(id, newStatus);
            fetchData();
        } catch (err) {
            console.error('Failed to update contact status', err);
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading admin panel...</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <button
                        onClick={() => {
                            localStorage.removeItem('isAdminAuthenticated');
                            navigate('/admin');
                        }}
                        className="text-red-600 hover:text-red-800 font-medium"
                    >
                        Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex space-x-4 mb-6 border-b border-gray-200 overflow-x-auto">
                    <button
                        className={`py-2 px-4 font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'applications'
                            ? 'border-rupivo-blue text-rupivo-blue'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('applications')}
                    >
                        Loan Applications ({applications.length})
                    </button>
                    <button
                        className={`py-2 px-4 font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'partners'
                            ? 'border-rupivo-blue text-rupivo-blue'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('partners')}
                    >
                        Partner Registrations ({partners.length})
                    </button>
                    <button
                        className={`py-2 px-4 font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'contacts'
                            ? 'border-rupivo-blue text-rupivo-blue'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('contacts')}
                    >
                        Contact Inquiries ({contacts.length})
                    </button>
                </div>

                <div className="bg-white shadow overflow-hidden rounded-md">
                    {activeTab === 'applications' && (
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
                    )}

                    {activeTab === 'partners' && (
                        <ul className="divide-y divide-gray-200">
                            {partners.length === 0 ? (
                                <li className="p-6 text-center text-gray-500">No registered partners found.</li>
                            ) : (
                                partners.map((partner) => (
                                    <li key={partner._id} className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center">
                                                    <p className="text-lg font-medium text-rupivo-blue truncate">
                                                        {partner.firstName} {partner.lastName}
                                                    </p>
                                                    <span className="ml-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                        PARTNER
                                                    </span>
                                                </div>
                                                <div className="mt-2 sm:flex sm:justify-between">
                                                    <div className="sm:flex">
                                                        <p className="flex items-center text-sm text-gray-500 mr-6">
                                                            📱 {partner.mobile}
                                                        </p>
                                                        <p className="flex items-center text-sm text-gray-500 mr-6">
                                                            📍 {partner.city}
                                                        </p>
                                                        <p className="flex items-center text-sm text-gray-500">
                                                            💼 {partner.profession}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="mt-1 text-xs text-gray-400">
                                                    Joined: {new Date(partner.createdAt).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            )}
                        </ul>
                    )}

                    {activeTab === 'contacts' && (
                        <ul className="divide-y divide-gray-200">
                            {contacts.length === 0 ? (
                                <li className="p-6 text-center text-gray-500">No contact inquiries found.</li>
                            ) : (
                                contacts.map((contact) => (
                                    <li key={contact._id} className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1 pr-4">
                                                <div className="flex items-center">
                                                    <p className="text-lg font-medium text-rupivo-blue truncate">
                                                        {contact.name}
                                                    </p>
                                                    <span className={`ml-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${contact.status === 'read' ? 'bg-gray-100 text-gray-800' :
                                                            contact.status === 'replied' ? 'bg-green-100 text-green-800' :
                                                                'bg-blue-100 text-blue-800'}`}>
                                                        {contact.status.toUpperCase()}
                                                    </span>
                                                </div>
                                                <div className="mt-2 sm:flex sm:justify-between">
                                                    <div className="sm:flex">
                                                        <p className="flex items-center text-sm text-gray-500 mr-6">
                                                            📧 {contact.email}
                                                        </p>
                                                        <p className="flex items-center text-sm text-gray-500">
                                                            📱 {contact.phone}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                                    <p className="text-sm text-gray-700 italic">"{contact.message}"</p>
                                                </div>
                                                <p className="mt-2 text-xs text-gray-400">
                                                    Received: {new Date(contact.createdAt).toLocaleString()}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                {contact.status === 'unread' && (
                                                    <button
                                                        onClick={() => updateContactStatus(contact._id, 'read')}
                                                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300"
                                                    >
                                                        Mark Read
                                                    </button>
                                                )}
                                                {contact.status !== 'replied' && (
                                                    <button
                                                        onClick={() => updateContactStatus(contact._id, 'replied')}
                                                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                                                    >
                                                        Mark Replied
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ))
                            )}
                        </ul>
                    )}
                </div>
            </div >
        </div >
    );
};
