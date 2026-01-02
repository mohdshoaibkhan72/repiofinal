import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ModalProvider, useModal } from './contexts/ModalContext';
import { RupivoPopup } from './components/form/RupivoPopup';
import { ComingSoonPopup } from './components/ComingSoonPopup';
import { Header } from './components/Header';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Footer } from './components/Footer';
import SEO from './components/SEO';

// Lazy loaded pages
const Home = lazy(() => import('./components/Home').then(module => ({ default: module.Home })));


// Company
const AboutUs = lazy(() => import('./components/pages/Company').then(module => ({ default: module.AboutUs })));
const Careers = lazy(() => import('./components/pages/Company').then(module => ({ default: module.Careers })));
const Blog = lazy(() => import('./components/pages/Company').then(module => ({ default: module.Blog })));

// Legal
const PrivacyPolicy = lazy(() => import('./components/pages/Legal').then(module => ({ default: module.PrivacyPolicy })));
const TermsAndConditions = lazy(() => import('./components/pages/Legal').then(module => ({ default: module.TermsAndConditions })));
const GrievanceRedressal = lazy(() => import('./components/pages/Legal').then(module => ({ default: module.GrievanceRedressal })));

// Support
const ContactUs = lazy(() => import('./components/pages/Support').then(module => ({ default: module.ContactUs })));
const FAQs = lazy(() => import('./components/pages/Support').then(module => ({ default: module.FAQs })));

// Other Pages
const SignIn = lazy(() => import('./components/pages/SignIn').then(module => ({ default: module.SignIn })));
const ReferralPartner = lazy(() => import('./components/pages/ReferralPartner').then(module => ({ default: module.ReferralPartner })));
const LoanApplication = lazy(() => import('./components/pages/LoanApplication').then(module => ({ default: module.LoanApplication })));
const AdminPanel = lazy(() => import('./components/pages/AdminPanel').then(module => ({ default: module.AdminPanel })));
const AdminLogin = lazy(() => import('./components/pages/AdminLogin').then(module => ({ default: module.AdminLogin })));

const AppContent: React.FC = () => {
  const { isModalOpen, closeModal, isComingSoonOpen, closeComingSoon, comingSoonMessage } = useModal();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col font-sans pb-24 md:pb-0 overflow-x-hidden">
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={
              <>
                <SEO
                  title="Rupivo | Instant Personal Loans | Eligibility First"
                  description="Get instant personal loans up to ₹10 Lakhs with Rupivo. Check your eligibility in seconds without impacting your credit score. Paperless & Transparent."
                  keywords="personal loan, instant loan, small business loan, loan eligibility, fast loan india"
                />
                <Home />
              </>
            } />

            {/* Auth */}
            <Route path="/signin" element={
              <>
                <SEO
                  title="Sign In | Rupivo"
                  description="Sign in to your Rupivo account to track your loan application status and manage your profile."
                />
                <SignIn />
              </>
            } />

            {/* Company */}
            <Route path="/about" element={
              <>
                <SEO
                  title="About Us | Rupivo | Democratizing Credit"
                  description="Rupivo is building the future of financial inclusion in India. We help underserved Indians get access to formal credit through alternate data underwriting."
                />
                <AboutUs />
              </>
            } />
            <Route path="/careers" element={
              <>
                <SEO
                  title="Careers at Rupivo | Join the Fintech Revolution"
                  description="Work that matters. Join Rupivo and help us solve the credit gap for a billion Indians. Open positions in Engineering, Product, and Growth."
                />
                <Careers />
              </>
            } />
            <Route path="/blog" element={
              <>
                <SEO
                  title="Rupivo Blog | Financial Wisdom & Tips"
                  description="Read the latest insights on personal finance, credit scores, and smart borrowing from Rupivo's financial experts."
                />
                <Blog />
              </>
            } />
            <Route path="/partner" element={
              <>
                <SEO
                  title="Become a Partner | Rupivo | High Commissions"
                  description="Join the Rupivo Partner Program. Earn up to 2.5% commission on every loan disbursal. Zero investment, instant payouts, and dedicated support."
                  keywords="dsa registration, loan agent, earn money online, referral partner program, fintech franchise"
                />
                <ReferralPartner />
              </>
            } />

            {/* Legal */}
            <Route path="/privacy" element={
              <>
                <SEO title="Privacy Policy | Rupivo" description="Read Rupivo's Privacy Policy. We are committed to protecting your data and privacy." />
                <PrivacyPolicy />
              </>
            } />
            <Route path="/terms" element={
              <>
                <SEO title="Terms & Conditions | Rupivo" description="User Terms and Conditions for using Rupivo's services and platform." />
                <TermsAndConditions />
              </>
            } />
            <Route path="/grievance" element={
              <>
                <SEO title="Grievance Redressal | Rupivo" description="Contact our Grievance Redressal Officer for any complaints or issues." />
                <GrievanceRedressal />
              </>
            } />

            {/* Support */}
            <Route path="/contact" element={
              <>
                <SEO title="Contact Us | Rupivo Support" description="Get in touch with Rupivo customer support for queries regarding your loan or application." />
                <ContactUs />
              </>
            } />
            <Route path="/faqs" element={
              <>
                <SEO title="FAQs | Rupivo Help Center" description="Frequently Asked Questions about Rupivo personal loans, eligibility, and repayment." />
                <FAQs />
              </>
            } />

            {/* New Features */}
            <Route path="/apply" element={
              <>
                <SEO title="Apply for Loan | Rupivo" description="Apply for an instant personal loan online. Quick process, minimal documentation." />
                <LoanApplication />
              </>
            } />
            <Route path="/admin" element={
              <>
                <SEO title="Admin Login | Rupivo" description="Restricted access for Rupivo administrators." />
                <AdminLogin />
              </>
            } />
            <Route path="/admin/dashboard" element={
              <>
                <SEO title="Admin Dashboard | Rupivo" description="Rupivo Admin Dashboard." />
                <AdminPanel />
              </>
            } />
          </Routes>
        </Suspense>
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