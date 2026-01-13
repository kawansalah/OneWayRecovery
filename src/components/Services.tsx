import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarCrash,
  faTruckPickup,
  faCarBattery,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

import { TireIcon, NationwideIcon } from "./Icons";

type ServiceIcon = IconDefinition | React.FC<{ className?: string }>;

interface Service {
  icon: ServiceIcon;
  iconType: "fontawesome" | "custom";
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: faCarCrash,
    iconType: "fontawesome",
    title: "Car Recovery",
    description:
      "We recover broken, stuck, or damaged cars from roads, parking areas, and remote places.",
  },
  {
    icon: faTruckPickup,
    iconType: "fontawesome",
    title: "Towing Service",
    description:
      "Safe towing for cars, SUVs, and light vehicles to your chosen location.",
  },
  {
    icon: faCarBattery,
    iconType: "fontawesome",
    title: "Battery Jump Start",
    description:
      "If your battery is dead, we can start your car quickly on the spot.",
  },
  {
    icon: TireIcon,
    iconType: "custom",
    title: "Flat Tire Assistance",
    description:
      "We help when your tire is flat or damaged and cannot continue driving.",
  },
  {
    icon: NationwideIcon,
    iconType: "custom",
    title: "Nationwide Coverage",
    description: "We can take you and / or your car anywhere within the UK",
  },
  {
    icon: faClock,
    iconType: "fontawesome",
    title: "24/7 Roadside Assistance",
    description:
      "We are available day and night, weekends and holidays included.",
  },
];

export default function Services() {
  return (
    <section className="space-y-12 sm:space-y-16 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Services Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center space-x-3 sm:space-x-6 md:space-x-8"
      >
        <div className="h-1 sm:h-1.5 w-16 sm:w-32 md:w-40 bg-brand-primary rounded-full opacity-80" />
        <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter italic text-center">
          Our Services
        </h3>
        <div className="h-1 sm:h-1.5 w-16 sm:w-32 md:w-40 bg-brand-primary rounded-full opacity-80" />
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative bg-rich-black/50 border border-slate-muted/20 rounded-3xl sm:rounded-[35px] md:rounded-[40px] shadow-2xl hover:border-brand-primary transition-all duration-500 hover:shadow-brand-primary/20 p-6 sm:p-7 md:p-8"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-all duration-300">
                {service.iconType === "fontawesome" ? (
                  <FontAwesomeIcon
                    icon={service.icon as IconDefinition}
                    className="text-4xl text-brand-primary group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  (() => {
                    const CustomIcon = service.icon as React.FC<{
                      className?: string;
                    }>;
                    return (
                      <CustomIcon className="w-12 h-12 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                    );
                  })()
                )}
              </div>
            </div>

            {/* Title */}
            <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-3 sm:mb-4 group-hover:text-brand-primary transition-colors duration-300">
              {service.title}
            </h4>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed group-hover:text-white transition-colors duration-300">
              {service.description}
            </p>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-[40px] bg-linear-to-br from-brand-primary/0 via-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/5 group-hover:via-brand-primary/10 group-hover:to-brand-primary/5 transition-all duration-500 -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
