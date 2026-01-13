import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faClock,
  faUsers,
  faTruck,
  faShieldHeart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

interface Benefit {
  icon: IconDefinition;
  title: string;
}

const benefits: Benefit[] = [
  {
    icon: faBoltLightning,
    title: "Fast arrival time",
  },
  {
    icon: faClock,
    title: "Available 24 hours, 7 days a week",
  },
  {
    icon: faUsers,
    title: "Professional and friendly team",
  },
  {
    icon: faTruck,
    title: "Modern recovery trucks",
  },
  {
    icon: faShieldHeart,
    title: "Safe handling of your vehicle",
  },
  {
    icon: faDollarSign,
    title: "Clear and fair pricing",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full space-y-12 sm:space-y-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Why Choose Us Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center space-x-3 sm:space-x-6 md:space-x-8"
      >
        <div className="h-1 sm:h-1.5 w-16 sm:w-32 md:w-40 bg-brand-primary rounded-full opacity-80" />
        <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter italic text-center whitespace-nowrap">
          Why Choose Us
        </h3>
        <div className="h-1 sm:h-1.5 w-16 sm:w-32 md:w-40 bg-brand-primary rounded-full opacity-80" />
      </motion.div>

      {/* Benefits List - 2 Column Layout */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-x-16 lg:gap-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group flex items-center gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-rich-black/50 border border-slate-muted/20 hover:border-brand-primary hover:bg-rich-black/70 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-all duration-300">
                <FontAwesomeIcon
                  icon={benefit.icon}
                  className="text-2xl sm:text-3xl text-brand-primary group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h4 className="text-white text-base sm:text-lg md:text-xl font-semibold group-hover:text-brand-primary transition-colors duration-300">
                {benefit.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
