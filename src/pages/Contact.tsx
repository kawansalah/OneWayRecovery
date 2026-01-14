import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-3 sm:space-x-6 md:space-x-8"
        >
          <div className="h-1 sm:h-1.5 w-16 sm:w-32 md:w-40 bg-brand-primary rounded-full opacity-80" />
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter italic text-center">
            Contact Us
          </h2>
          <div className="h-1 sm:h-1.5 w-16 sm:w-32 md:w-40 bg-brand-primary rounded-full opacity-80" />
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Phone */}
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+447377226647"
            className="group bg-rich-black/50 border border-slate-muted/20 hover:border-brand-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10 active:scale-95"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-all">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-2 font-semibold">
                  CALL US NOW
                </p>
                <p className="text-white text-lg sm:text-xl font-bold group-hover:text-brand-primary transition-colors">
                  +44 7377 226647
                </p>
              </div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:onewaycarrecovery@gmail.com"
            className="group bg-rich-black/50 border border-slate-muted/20 hover:border-brand-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10 active:scale-95"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-all">
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-2 font-semibold">
                  EMAIL US
                </p>
                <p className="text-white text-sm sm:text-base font-bold group-hover:text-brand-primary transition-colors break-all">
                  onewaycarrecovery@gmail.com
                </p>
              </div>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/447377226647?text=Hello%2C%20I%20need%20car%20recovery%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-rich-black/50 border border-slate-muted/20 hover:border-[#25D366] rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/10 active:scale-95"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-all">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-4xl sm:text-5xl text-[#25D366]"
                />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-2 font-semibold">
                  WHATSAPP
                </p>
                <p className="text-white text-lg sm:text-xl font-bold group-hover:text-[#25D366] transition-colors">
                  Message Us
                </p>
              </div>
            </div>
          </motion.a>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-rich-black/50 border border-slate-muted/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-brand-primary/10">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-2 font-semibold">
                  OPEN HOURS
                </p>
                <p className="text-white text-base sm:text-lg font-bold">
                  Mon-Sat: 08:00 - 18:00
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Address & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-rich-black/50 border border-slate-muted/20 rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-brand-primary/10 flex-shrink-0">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Visit Our Location
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  We're based in Leicester and serve the surrounding areas. Feel
                  free to reach out to us for any car recovery or roadside
                  assistance needs.
                </p>
                <div className="bg-brand-primary/10 border border-brand-primary/30 rounded-2xl p-4 sm:p-6">
                  <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                    Newington Walk, Leicester LE4 5DN
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Emergency Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-rich-black/50 border border-slate-muted/20 rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Emergency Assistance
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                <p className="text-gray-300 text-sm sm:text-base">
                  24/7 Emergency car recovery service
                </p>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Fast response times across Leicester
                </p>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Professional and friendly team
                </p>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Modern recovery trucks and equipment
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+447377226647"
                className="flex items-center justify-center bg-brand-primary hover:bg-brand-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black text-base sm:text-lg shadow-xl shadow-brand-primary/20 transition-all hover:shadow-2xl hover:shadow-brand-primary/30"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now for Emergency
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
