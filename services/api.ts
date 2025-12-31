const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_BASE_URL = isLocal ? 'http://localhost:5000/api' : 'https://repiofinal.onrender.com/api';

export const api = {
    applications: {
        create: async (data: any) => {
            const response = await fetch(`${API_BASE_URL}/applications`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error: any = new Error(errorData.error || 'Failed to create application');
                error.response = {
                    status: response.status,
                    data: errorData
                };
                throw error;
            }
            return response.json();
        },

        getAll: async () => {
            const response = await fetch(`${API_BASE_URL}/applications`);
            if (!response.ok) throw new Error('Failed to fetch applications');
            return response.json();
        },

        updateStatus: async (id: string, status: string) => {
            const response = await fetch(`${API_BASE_URL}/applications/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });
            if (!response.ok) throw new Error('Failed to update application status');
            return response.json();
        },
    },
    partners: {
        create: async (data: any) => {
            const response = await fetch(`${API_BASE_URL}/partners`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Failed to register partner');
            return response.json();
        },

        getAll: async () => {
            const response = await fetch(`${API_BASE_URL}/partners`);
            if (!response.ok) throw new Error('Failed to fetch partners');
            return response.json();
        },
    },
    contacts: {
        create: async (data: any) => {
            const response = await fetch(`${API_BASE_URL}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Failed to submit contact inquiry');
            return response.json();
        },

        getAll: async () => {
            const response = await fetch(`${API_BASE_URL}/contacts`);
            if (!response.ok) throw new Error('Failed to fetch contacts');
            return response.json();
        },

        updateStatus: async (id: string, status: string) => {
            const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }),
            });
            if (!response.ok) throw new Error('Failed to update contact status');
            return response.json();
        },
    },
};
