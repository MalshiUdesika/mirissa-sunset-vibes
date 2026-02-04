import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-beach-sunset.jpg";

interface HeroProps {
  onBookingClick: () => void;
}

const Hero = ({ onBookingClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Mirissa Beach Sunset"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/30 to-transparent" />
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-10 pointer-events-none">
        <svg
          className="absolute bottom-0 w-[200%] h-full animate-wave-slow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120Z"
            fill="hsl(var(--sand-light))"
            opacity="0.3"
          />
          <path
            d="M0,120V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V120Z"
            fill="hsl(var(--sand-light))"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-sunset-gold/60"
        animate={{ y: [-20, 20, -20], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-sunset-orange/50"
        animate={{ y: [20, -20, 20], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-emerald/40"
        animate={{ y: [-15, 15, -15], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sand-light text-sm font-medium tracking-wider uppercase">
            Mirissa, Sri Lanka
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-hero-md md:text-hero-lg lg:text-hero-xl text-sand-light text-shadow-hero mb-6"
        >
          Sunset Cocktails &{" "}
          <span className="gradient-text-sunset">Beachfront Bliss</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-sand-light/90 max-w-2xl mx-auto mb-10 font-light"
        >
          Fresh Seafood • Sri Lankan Fusion • Live Music
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBookingClick}
            className="btn-sunset relative z-10 animate-pulse-glow"
          >
            <span className="relative z-10">Reserve Your Table</span>
          </button>
          <a href="#menu" className="btn-ocean">
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-sand-light/70 hover:text-sand-light transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
