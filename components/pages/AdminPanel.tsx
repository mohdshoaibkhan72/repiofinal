import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import {
    LayoutDashboard,
    Users,
    MessageSquare,
    LogOut,
    Loader2,
    Inbox,
    CheckCircle,
    XCircle,
    RotateCcw,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    IndianRupee,
    FileText,
    Calendar,
    Trash2
} from 'lucide-react';

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

    const deleteApplication = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this application?")) return;
        try {
            await api.applications.delete(id);
            fetchData();
        } catch (err) {
            console.error('Failed to delete application', err);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <Loader2 className="w-12 h-12 text-rupivo-blue animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Loading Dashboard...</p>
        </div>
    );

    const SidebarItem = ({ id, icon: Icon, label }: { id: typeof activeTab, icon: any, label: string }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center gap-3 px-6 py-4 transition-all duration-200 border-l-4 ${activeTab === id
                ? 'bg-blue-50 border-rupivo-blue text-rupivo-blue font-bold shadow-sm'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
                }`}
        >
            <Icon size={20} />
            <span>{label}</span>
        </button>
    );

    const EmptyState = ({ message }: { message: string }) => (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-gray-100 shadow-sm col-span-full">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <Inbox className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No Data Found</h3>
            <p className="text-gray-500">{message}</p>
        </div>
    );

    // Helper to format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex font-sans">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-72 bg-white border-r border-gray-200 z-50 flex flex-col shadow-sm hidden lg:flex">
                <div className="p-8 border-b border-gray-100">
                    <h1 className="text-2xl font-extrabold text-rupivo-dark">Rupivo<span className="text-rupivo-blue">.</span></h1>
                    <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mt-1">Admin Panel</p>
                </div>

                <nav className="flex-1 py-6 space-y-1">
                    <SidebarItem id="applications" icon={LayoutDashboard} label="Loan Applications" />
                    <SidebarItem id="partners" icon={Users} label="Partners" />
                    <SidebarItem id="contacts" icon={MessageSquare} label="Inquiries" />
                </nav>

                <div className="p-6 border-t border-gray-100">
                    <button
                        onClick={() => {
                            localStorage.removeItem('isAdminAuthenticated');
                            navigate('/admin');
                        }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-bold"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Mobile Header (Visible only on small screens) */}
            <div className="lg:hidden fixed top-0 w-full bg-white border-b border-gray-200 z-50 px-4 py-3 flex justify-between items-center shadow-sm">
                <h1 className="text-xl font-extrabold text-rupivo-dark">Rupivo Admin</h1>
                <button onClick={() => { localStorage.removeItem('isAdminAuthenticated'); navigate('/admin'); }} className="text-red-600 font-medium text-sm">Logout</button>
            </div>

            {/* Mobile Tab Nav (Visible only on small screens) */}
            <div className="lg:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 z-50 flex justify-around py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <button onClick={() => setActiveTab('applications')} className={`flex flex-col items-center ${activeTab === 'applications' ? 'text-rupivo-blue' : 'text-gray-400'}`}><LayoutDashboard size={20} /><span className="text-[10px] mt-1 font-bold">Applications</span></button>
                <button onClick={() => setActiveTab('partners')} className={`flex flex-col items-center ${activeTab === 'partners' ? 'text-rupivo-blue' : 'text-gray-400'}`}><Users size={20} /><span className="text-[10px] mt-1 font-bold">Partners</span></button>
                <button onClick={() => setActiveTab('contacts')} className={`flex flex-col items-center ${activeTab === 'contacts' ? 'text-rupivo-blue' : 'text-gray-400'}`}><MessageSquare size={20} /><span className="text-[10px] mt-1 font-bold">Inquiries</span></button>
            </div>

            {/* Main Content */}
            <main className="flex-1 lg:pl-72 pt-16 lg:pt-0 pb-20 lg:pb-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">
                            {activeTab === 'applications' && 'Loan Applications'}
                            {activeTab === 'partners' && 'Partner Registrations'}
                            {activeTab === 'contacts' && 'Contact Inquiries'}
                        </h2>
                        <p className="text-gray-500 mt-1">Manage and view all incoming requests from the website.</p>
                    </div>

                    {/* Applications Tab */}
                    {activeTab === 'applications' && (
                        <div className="space-y-4">
                            {applications.length === 0 ? (
                                <EmptyState message="No loan applications have been submitted yet." />
                            ) : (
                                applications.map((app) => (
                                    <div key={app._id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-xl font-bold text-gray-900">{app.fullName}</h3>
                                                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider
                                                        ${app.status === 'approved' ? 'bg-green-100 text-green-700' :
                                                            app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                                                'bg-yellow-100 text-yellow-700'}`}>
                                                        {app.status}
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                                                    <div className="flex items-center text-sm text-gray-600 gap-2"><Mail size={16} className="text-gray-400" /> {app.email}</div>
                                                    <div className="flex items-center text-sm text-gray-600 gap-2"><Phone size={16} className="text-gray-400" /> {app.phone}</div>
                                                    <div className="flex items-center text-sm text-gray-600 gap-2"><IndianRupee size={16} className="text-gray-400" /> <strong>{(app.loanAmount || 0).toLocaleString()}</strong> (Min)</div>
                                                    <div className="flex items-center text-sm text-gray-600 gap-2"><Calendar size={16} className="text-gray-400" /> {formatDate(app.createdAt)}</div>
                                                </div>

                                                {/* Loan Range Display */}
                                                <div className="mt-3 flex items-center gap-2 text-sm text-gray-700 bg-blue-50 px-3 py-2 rounded-lg w-fit">
                                                    <span className="font-bold text-rupivo-blue tracking-wide">Selected Range:</span>
                                                    <span>{(app.purpose || '').match(/Loan Range: (.*)/)?.[1] || 'N/A'}</span>
                                                </div>

                                                <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                                    <div className="flex items-start gap-2">
                                                        <FileText size={16} className="text-gray-400 mt-1 shrink-0" />
                                                        <div>
                                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Details</span>
                                                            <p className="text-gray-700 text-sm mt-1">{(app.purpose || '').replace(/, Loan Range: .*/, '') || 'No details specified.'}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-auto mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                                                {app.status === 'pending' ? (
                                                    <>
                                                        <button
                                                            onClick={() => updateStatus(app._id, 'approved')}
                                                            className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-colors shadow-sm"
                                                        >
                                                            <CheckCircle size={16} /> Approve
                                                        </button>
                                                        <button
                                                            onClick={() => updateStatus(app._id, 'rejected')}
                                                            className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-red-white border border-red-200 text-red-600 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors"
                                                        >
                                                            <XCircle size={16} /> Reject
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        onClick={() => updateStatus(app._id, 'pending')}
                                                        className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
                                                    >
                                                        <RotateCcw size={16} /> Reset
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deleteApplication(app._id)}
                                                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-400 rounded-xl text-sm font-bold hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-colors"
                                                >
                                                    <Trash2 size={16} /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* Partners Tab */}
                    {activeTab === 'partners' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {partners.length === 0 ? (
                                <EmptyState message="No partners have registered yet." />
                            ) : (
                                partners.map((partner) => (
                                    <div key={partner._id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-rupivo-blue font-bold text-xl">
                                                {partner.firstName[0]}{partner.lastName[0]}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">{partner.firstName} {partner.lastName}</h3>
                                                <span className="px-2 py-0.5 bg-blue-50 text-rupivo-blue text-[10px] font-bold uppercase tracking-widest rounded-md">Partner</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center text-sm text-gray-600 gap-3">
                                                <Phone size={16} className="text-gray-400 shrink-0" /> {partner.mobile}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600 gap-3">
                                                <MapPin size={16} className="text-gray-400 shrink-0" /> {partner.city}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600 gap-3">
                                                <Briefcase size={16} className="text-gray-400 shrink-0" /> {partner.profession}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-400 gap-3 pt-3 border-t border-gray-50">
                                                <Calendar size={16} className="text-gray-300 shrink-0" /> Joined {formatDate(partner.createdAt)}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* Contacts Tab */}
                    {activeTab === 'contacts' && (
                        <div className="space-y-4">
                            {contacts.length === 0 ? (
                                <EmptyState message="No contact inquiries received." />
                            ) : (
                                contacts.map((contact) => (
                                    <div key={contact._id} className={`rounded-2xl p-6 border shadow-sm transition-all ${contact.status === 'unread' ? 'bg-white border-blue-200 ring-1 ring-blue-50' : 'bg-gray-50 border-gray-100'
                                        }`}>
                                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
                                                    <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-md
                                                        ${contact.status === 'unread' ? 'bg-blue-100 text-blue-700' :
                                                            contact.status === 'replied' ? 'bg-green-100 text-green-700' :
                                                                'bg-gray-200 text-gray-600'}`}>
                                                        {contact.status}
                                                    </span>
                                                </div>
                                                <div className="flex gap-4 text-sm text-gray-500 mb-4">
                                                    <span className="flex items-center gap-1"><Mail size={14} /> {contact.email}</span>
                                                    <span className="flex items-center gap-1"><Phone size={14} /> {contact.phone}</span>
                                                </div>
                                                <p className="text-gray-800 bg-white p-4 rounded-xl border border-gray-200 text-sm leading-relaxed">
                                                    "{contact.message}"
                                                </p>
                                                <p className="text-xs text-gray-400 mt-3 font-medium">{formatDate(contact.createdAt)}</p>
                                            </div>

                                            <div className="flex gap-2">
                                                {contact.status === 'unread' && (
                                                    <button
                                                        onClick={() => updateContactStatus(contact._id, 'read')}
                                                        className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 uppercase tracking-wider"
                                                    >
                                                        Mark Read
                                                    </button>
                                                )}
                                                {contact.status !== 'replied' && (
                                                    <button
                                                        onClick={() => updateContactStatus(contact._id, 'replied')}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 uppercase tracking-wider shadow-sm"
                                                    >
                                                        Mark Replied
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
};
