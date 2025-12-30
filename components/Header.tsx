import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../logo.png';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen || !isHome
            ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100/50 shadow-sm'
            : 'bg-transparent border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 z-50" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="RUPIVO" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              <button onClick={() => handleNavClick('how-it-works')} className="text-gray-600 hover:text-rupivo-blue font-semibold transition-colors text-sm tracking-wide">
                How it Works
              </button>
              <button onClick={() => handleNavClick('eligibility')} className="text-gray-600 hover:text-rupivo-blue font-semibold transition-colors text-sm tracking-wide">
                Eligibility
              </button>
              <button onClick={() => handleNavClick('support')} className="text-gray-600 hover:text-rupivo-blue font-semibold transition-colors text-sm tracking-wide">
                Support
              </button>
              <Link to="/signin" className="bg-rupivo-dark/5 text-rupivo-dark px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-rupivo-dark/10 transition-all">
                Sign In
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <div className="flex items-center md:hidden z-50">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-rupivo-dark hover:bg-gray-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6`}>
        <div className="flex flex-col space-y-6">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-rupivo-dark">Home</Link>
          <button onClick={() => handleNavClick('how-it-works')} className="text-left text-2xl font-bold text-rupivo-dark">How it Works</button>
          <button onClick={() => handleNavClick('eligibility')} className="text-left text-2xl font-bold text-rupivo-dark">Eligibility</button>
          <button onClick={() => handleNavClick('support')} className="text-left text-2xl font-bold text-rupivo-dark">Support</button>
          <Link to="/signin" onClick={() => setMobileMenuOpen(false)} className="text-left text-2xl font-bold text-rupivo-dark">Sign In</Link>
          <hr className="border-gray-100" />
          <button className="w-full bg-rupivo-blue text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-rupivo-blue/30">
            Download App
          </button>
        </div>
      </div>
    </>
  );
};