import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { LocationIcon } from "./Icons";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-rich-black/50 mt-12 sm:mt-16 md:mt-20">
      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16"
      >
        {/* Top Section - Brand and Description */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 pb-8 sm:pb-10 md:pb-12 border-b border-slate-muted/20">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <img
              src={logo}
              alt="OneWay Recovery Logo"
              className="h-32 sm:h-36 md:h-40 lg:h-48 xl:h-56 w-auto"
            />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-primary tracking-tight italic mb-3 sm:mb-4">
            OneWay Recovery
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Professional car recovery and roadside assistance service available
            24/7 in Leicester and surrounding areas.
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6 text-brand-primary">
            <FontAwesomeIcon
              icon={faClock}
              className="text-base sm:text-lg md:text-xl"
            />
            <span className="text-sm sm:text-base md:text-lg font-semibold">
              24/7 Emergency Service
            </span>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          <a
            href="tel:+447123456789"
            className="group bg-rich-black/50 border border-slate-muted/20 hover:border-brand-primary rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10 active:scale-95"
          >
            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-all">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-xl sm:text-2xl text-brand-primary"
                />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Call Us</p>
                <p className="text-white text-sm sm:text-base font-semibold group-hover:text-brand-primary transition-colors">
                  +44 7123 456789
                </p>
              </div>
            </div>
          </a>

          <a
            href="mailto:onewaycarrecovery@gmail.com"
            className="group bg-rich-black/50 border border-slate-muted/20 hover:border-brand-primary rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10 active:scale-95"
          >
            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-all">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl sm:text-2xl text-brand-primary"
                />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">
                  Email Us
                </p>
                <p className="text-white font-semibold group-hover:text-brand-primary transition-colors text-xs sm:text-sm break-all">
                  onewaycarrecovery@gmail.com
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/447123456789?text=Hello%2C%20I%20need%20car%20recovery%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-rich-black/50 border border-slate-muted/20 hover:border-[#25D366] rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/10 active:scale-95"
          >
            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-all">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-xl sm:text-2xl text-[#25D366]"
                />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">
                  WhatsApp
                </p>
                <p className="text-white text-sm sm:text-base font-semibold group-hover:text-[#25D366] transition-colors">
                  Message Us
                </p>
              </div>
            </div>
          </a>

          <div className="bg-rich-black/50 border border-slate-muted/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6">
            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-brand-primary/10">
                <LocationIcon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Address</p>
                <p className="text-white text-xs sm:text-sm font-semibold">
                  Newington Walk, Leicester LE4 5DN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {["Home", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={
                  link === "Home"
                    ? "#"
                    : `#${link.toLowerCase().replace(" ", "-")}`
                }
                className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium text-sm sm:text-base active:text-brand-primary"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-muted/20 bg-rich-black/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © {new Date().getFullYear()} OneWay Recovery. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Developed by{" "}
                <a
                  href="https://kawansalahadin.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:text-brand-primary/80 transition-colors duration-300 font-medium"
                >
                  Kawan Salahadin
                </a>
              </p>
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-brand-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-brand-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
