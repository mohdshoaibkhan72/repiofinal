import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ModalProvider, useModal } from './contexts/ModalContext';
import { RupivoPopup } from './components/form/RupivoPopup';
import { ComingSoonPopup } from './components/ComingSoonPopup';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Footer } from './components/Footer';

// Pages
import { AboutUs, Careers, Blog } from './components/pages/Company';
import { PrivacyPolicy, TermsAndConditions, GrievanceRedressal } from './components/pages/Legal';
import { ContactUs, FAQs } from './components/pages/Support';
import { SignIn } from './components/pages/SignIn';
import { ReferralPartner } from './components/pages/ReferralPartner';
import { LoanApplication } from './components/pages/LoanApplication';
import { AdminPanel } from './components/pages/AdminPanel';
import { AdminLogin } from './components/pages/AdminLogin';

const AppContent: React.FC = () => {
  const { isModalOpen, closeModal, isComingSoonOpen, closeComingSoon, comingSoonMessage } = useModal();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col font-sans pb-24 md:pb-0 overflow-x-hidden">
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Auth */}
          <Route path="/signin" element={<SignIn />} />

          {/* Company */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partner" element={<ReferralPartner />} />

          {/* Legal */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/grievance" element={<GrievanceRedressal />} />

          {/* Support */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />

          {/* New Features */}
          <Route path="/apply" element={<LoanApplication />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminPanel />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <StickyMobileCTA />}
      <RupivoPopup isOpen={isModalOpen} onClose={closeModal} />
      <ComingSoonPopup isOpen={isComingSoonOpen} onClose={closeComingSoon} message={comingSoonMessage} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Router>
        <AppContent />
      </Router>
    </ModalProvider>
  );
};

export default App;