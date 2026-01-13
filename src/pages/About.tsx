import { Users, Award, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Professional Team",
      description:
        "Our experienced recovery specialists are trained to handle any roadside emergency with expertise and care.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description:
        "We pride ourselves on delivering exceptional service with modern equipment and proven recovery techniques.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Day or night, weekends or holidays - we're always ready to help when you need us most.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "Your vehicle's safety is our priority. We use proper equipment and techniques for secure transportation.",
    },
  ];

  return (
    <section id="about" className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-3 sm:space-x-6 md:space-x-8"
        >
          <div className="h-1 sm:h-1.5 w-16 sm:w-32 md:w-40 bg-brand-primary rounded-full opacity-80" />
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter italic text-center">
            About Us
          </h2>
          <div className="h-1 sm:h-1.5 w-16 sm:w-32 md:w-40 bg-brand-primary rounded-full opacity-80" />
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-rich-black/50 border border-slate-muted/20 rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl"
        >
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Your Trusted Recovery Partner in Leicester
          </h3>
          <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              OneWay Recovery is a professional car recovery and roadside
              assistance service based in Leicester, dedicated to helping
              drivers when they need it most. We understand that vehicle
              breakdowns and accidents can happen at any time, which is why
              we're available 24/7 to provide fast, reliable assistance.
            </p>
            <p>
              Our team of experienced recovery specialists is equipped with
              modern recovery vehicles and the latest equipment to handle any
              situation safely and efficiently. From simple jump starts to
              complex recovery operations, we have the expertise to get you back
              on the road or transport your vehicle to your chosen destination.
            </p>
            <p>
              We serve Leicester and the surrounding areas with pride, building
              our reputation on professionalism, reliability, and exceptional
              customer service. When you call OneWay Recovery, you can trust
              that help is on the way.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-rich-black/50 border border-slate-muted/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-brand-primary transition-all duration-300 hover:shadow-brand-primary/20"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-all duration-300">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-white text-lg sm:text-xl font-bold group-hover:text-brand-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Area */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-rich-black/50 border border-slate-muted/20 rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-2xl text-center"
        >
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Coverage Area
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Based in Leicester, we provide comprehensive car recovery and
            roadside assistance services throughout Leicester and the
            surrounding areas. Our strategically located base allows us to reach
            you quickly, wherever you are in our coverage zone.
          </p>
          <div className="inline-flex items-center space-x-3 bg-brand-primary/15 border border-brand-primary/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-white text-sm sm:text-base font-bold">
              Newington Walk, Leicester LE4 5DN
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
