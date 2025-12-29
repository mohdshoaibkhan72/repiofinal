import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
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
          </Routes>
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </Router>
  );
};

export default App;