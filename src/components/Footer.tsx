import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-ocean-deep py-16 overflow-hidden">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden -translate-y-full">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="hsl(213, 78%, 15%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Meridian Escapes" className="h-12 w-auto" />
                <span className="font-display text-xl text-sand-light leading-tight">Meridian<br />Escapes</span>
              </div>
              <p className="text-sand-light/60 mb-6 max-w-sm">
                Mirissa's premier beachfront destination where ocean views meet culinary excellence. 
                Experience sunset cocktails, fresh seafood, and authentic Sri Lankan flavors.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/meridianescapes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sand-light hover:bg-sunset-orange hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/meridianescapes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sand-light hover:bg-sunset-orange hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg text-sand-light mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Menu", "Gallery", "Events", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sand-light/60 hover:text-sunset-orange transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg text-sand-light mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sunset-orange mt-1 flex-shrink-0" />
                <span className="text-sand-light/60">Beach Road, Mirissa 81740, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sunset-orange flex-shrink-0" />
                <a href="tel:+94777301747" className="text-sand-light/60 hover:text-sunset-orange transition-colors">
                  +94 77 730 1747
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sunset-orange flex-shrink-0" />
                <a href="mailto:hello@meridianescapes.lk" className="text-sand-light/60 hover:text-sunset-orange transition-colors">
                  hello@meridianescapes.lk
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sand-light/40 text-sm">
            © {currentYear} Meridian Escapes. All rights reserved.
          </p>
          <p className="text-sand-light/40 text-sm">
            Open Daily: 8:30 AM - 10:00 PM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
