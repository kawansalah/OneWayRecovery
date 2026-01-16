import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { useState } from "react";
import { LocationIcon } from "./Icons";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 lg:p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto flex flex-col items-center">
          {/* Main Navigation Bar */}
          <div className="w-full bg-rich-black/95 border border-slate-muted/20 rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between shadow-2xl backdrop-blur-xl mb-[-12px] relative z-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 sm:space-x-3">
              <img
                src={logo}
                alt="OneWay Recovery Logo"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
              <div className="text-white font-black text-xl sm:text-2xl md:text-3xl tracking-tight">
                One Way <span className="text-brand-primary">Recovery</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-white/90 text-[13px] font-black tracking-widest">
              <a
                href="#"
                className="hover:text-brand-primary transition-colors duration-300"
              >
                HOME
              </a>
              <a
                href="#about"
                className="hover:text-brand-primary transition-colors duration-300"
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="hover:text-brand-primary transition-colors duration-300"
              >
                CONTACT
              </a>
            </div>

            {/* Desktop Contact Button */}
            <a
              href="tel:+447377226647"
              className="hidden sm:inline-flex bg-brand-primary hover:bg-brand-secondary transition-all duration-300 text-white px-6 lg:px-10 py-2.5 lg:py-3 rounded-full font-black text-[11px] lg:text-[13px] tracking-wider shadow-[0_0_25px_rgba(49,107,249,0.4)] hover:shadow-[0_0_35px_rgba(49,107,249,0.6)] items-center justify-center"
            >
              CONTACT
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:text-brand-primary transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={2.5} />
              ) : (
                <Menu size={24} strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* Info Bar - Hidden on Mobile */}
          <div className="hidden sm:flex w-[93%] bg-brand-primary rounded-b-[24px] rounded-t-none px-8 lg:px-12 py-3 items-center justify-between gap-4 text-white text-[11px] font-black tracking-widest shadow-xl relative z-10 pt-6">
            <a
              href="tel:+447377226647"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <Phone size={13} strokeWidth={3} />
              <span className="whitespace-nowrap">+44 7377 226647</span>
            </a>

            <a
              href="mailto:onewaycarrecovery@gmail.com"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <Mail size={13} strokeWidth={3} />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:max-w-none">
                onewaycarrecovery@gmail.com
              </span>
            </a>

            <div className="flex items-center space-x-3">
              <Clock size={13} strokeWidth={3} />
              <span className="whitespace-nowrap">24/7 - Always Available</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-rich-black/98 backdrop-blur-xl border-l border-slate-muted/20 z-50 transform transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-muted/20">
            <span className="text-white font-black text-lg tracking-tight">
              One Way <span className="text-brand-primary">Recovery</span>
            </span>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:text-brand-primary transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-1 p-6">
            <a
              href="#"
              onClick={toggleMobileMenu}
              className="text-white/90 hover:text-brand-primary hover:bg-white/5 transition-all duration-300 font-black text-[15px] tracking-widest py-4 px-4 rounded-lg"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={toggleMobileMenu}
              className="text-white/90 hover:text-brand-primary hover:bg-white/5 transition-all duration-300 font-black text-[15px] tracking-widest py-4 px-4 rounded-lg"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={toggleMobileMenu}
              className="text-white/90 hover:text-brand-primary hover:bg-white/5 transition-all duration-300 font-black text-[15px] tracking-widest py-4 px-4 rounded-lg"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-auto">
            <div className="p-6 space-y-3 border-t border-slate-muted/20">
              <a
                href="tel:+447377226647"
                className="flex items-center space-x-3 text-white/90 hover:text-brand-primary transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary/10">
                  <Phone size={16} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-semibold">
                    CALL US
                  </span>
                  <span className="text-sm font-bold">+44 7377 226647</span>
                </div>
              </a>

              <a
                href="mailto:onewaycarrecovery@gmail.com"
                className="flex items-center space-x-3 text-white/90 hover:text-brand-primary transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary/10">
                  <Mail size={16} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-semibold">
                    EMAIL US
                  </span>
                  <span className="text-xs font-bold break-all">
                    onewaycarrecovery@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary/10">
                  <Clock size={16} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-semibold">
                    HOURS
                  </span>
                  <span className="text-sm font-bold">
                    24/7 - Always Available
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-white/90 pt-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary/10 flex-shrink-0">
                  <LocationIcon className="w-4 h-4 text-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-semibold">
                    ADDRESS
                  </span>
                  <span className="text-xs font-bold leading-relaxed">
                    Newington Walk, Leicester LE4 5DN
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Contact Button */}
            <div className="p-6 pt-0">
              <a
                href="tel:+447377226647"
                onClick={toggleMobileMenu}
                className="flex w-full bg-brand-primary hover:bg-brand-secondary transition-all duration-300 text-white px-6 py-4 rounded-full font-black text-[13px] tracking-wider shadow-[0_0_25px_rgba(49,107,249,0.4)] hover:shadow-[0_0_35px_rgba(49,107,249,0.6)] items-center justify-center text-center"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
