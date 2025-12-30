import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    isComingSoonOpen: boolean;
    comingSoonMessage: string;
    openComingSoon: (message?: string) => void;
    closeComingSoon: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
    const [comingSoonMessage, setComingSoonMessage] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openComingSoon = (message: string = 'We are working hard to bring this feature to you.') => {
        setComingSoonMessage(message);
        setIsComingSoonOpen(true);
    };

    const closeComingSoon = () => {
        setIsComingSoonOpen(false);
    };

    return (
        <ModalContext.Provider value={{
            isModalOpen,
            openModal,
            closeModal,
            isComingSoonOpen,
            comingSoonMessage,
            openComingSoon,
            closeComingSoon
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
