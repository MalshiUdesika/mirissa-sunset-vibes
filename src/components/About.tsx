import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Users, Clock, MapPin } from "lucide-react";
import loungeImage from "@/assets/lounge-atmosphere.jpg";

const stats = [
  { icon: Star, value: "4.6", label: "TripAdvisor Rating", suffix: "★" },
  { icon: Users, value: "10K+", label: "Happy Guests" },
  { icon: Clock, value: "8:30AM", label: "Opening Time", suffix: "-10PM" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-ocean-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={loungeImage}
                alt="Taboo Lounge Atmosphere"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 md:right-8 glass-card p-6 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-sunset-orange" />
                <span className="text-sand-light font-medium">Beach Road, Mirissa</span>
              </div>
              <p className="text-sand-light/70 text-sm">
                Steps from the ocean, where every sunset tells a story
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sunset-orange uppercase tracking-widest text-sm font-semibold mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-section md:text-5xl text-sand-light mb-6">
              Mirissa's Premier{" "}
              <span className="gradient-text-sunset">Beach Lounge</span>
            </h2>
            <p className="text-sand-light/80 text-lg mb-6 leading-relaxed">
              Where the Indian Ocean meets epicurean excellence. Taboo Lounge is more than a restaurant—it's a sensory journey through Sri Lanka's finest flavors, served with your feet in the sand and the sunset painting the sky.
            </p>
            <p className="text-sand-light/70 mb-10">
              From traditional hoppers at sunrise to signature cocktails at golden hour, every moment at Taboo is crafted to be unforgettable. Our chefs blend centuries-old Lankan recipes with contemporary techniques, while our bartenders shake up tropical magic you won't find anywhere else.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-sunset-orange mx-auto mb-2" />
                  <div className="font-display text-2xl md:text-3xl text-sand-light">
                    {stat.value}
                    {stat.suffix && <span className="text-sunset-gold">{stat.suffix}</span>}
                  </div>
                  <p className="text-sand-light/60 text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
