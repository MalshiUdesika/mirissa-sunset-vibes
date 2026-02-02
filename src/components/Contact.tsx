import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Beach Road, Mirissa 81740",
    subtext: "Sri Lanka",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 77 730 1747",
    href: "tel:+94777301747",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@taboolounge.lk",
    href: "mailto:hello@taboolounge.lk",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "8:30 AM - 10:00 PM",
    subtext: "Open Daily",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to make a reservation at Taboo Lounge.");
    window.open(`https://wa.me/94777301747?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ocean-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset-orange/10 rounded-full blur-3xl" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-emerald/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sunset-orange uppercase tracking-widest text-sm font-semibold mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-section md:text-5xl text-sand-light mb-4">
            Reserve Your <span className="gradient-text-sunset">Experience</span>
          </h2>
          <p className="text-sand-light/70 max-w-2xl mx-auto">
            Whether it's a romantic dinner, group celebration, or casual sunset drinks - we're here to make it perfect
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card-dark p-8 rounded-3xl">
              <h3 className="font-display text-2xl text-sand-light mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sand-light/70 text-sm mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-sunset-orange/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sand-light/70 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-sunset-orange/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sand-light/70 text-sm mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-sunset-orange/50 transition-colors"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sand-light/70 text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sand-light placeholder:text-sand-light/40 focus:outline-none focus:border-sunset-orange/50 transition-colors resize-none"
                    placeholder="Tell us about your reservation..."
                  />
                </div>
                <button type="submit" className="btn-sunset w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsApp}
              className="w-full p-6 glass-card flex items-center gap-4 hover:bg-white/20 transition-colors rounded-2xl group"
            >
              <div className="w-14 h-14 bg-emerald/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-emerald" />
              </div>
              <div className="text-left">
                <p className="text-sand-light font-semibold text-lg">Book via WhatsApp</p>
                <p className="text-sand-light/60 text-sm">Instant response, no waiting</p>
              </div>
            </button>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-5 rounded-xl"
                >
                  <info.icon className="w-5 h-5 text-sunset-orange mb-3" />
                  <p className="text-sand-light/60 text-xs uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sand-light font-medium hover:text-sunset-orange transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sand-light font-medium">{info.value}</p>
                  )}
                  {info.subtext && (
                    <p className="text-sand-light/50 text-sm">{info.subtext}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-elevated">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8!2d80.4597!3d5.9486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMirissa%20Beach!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Taboo Lounge Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Emergency Contact */}
            <div className="text-center">
              <p className="text-sand-light/50 text-sm">
                Emergency:{" "}
                <a href="tel:+94740468422" className="text-sunset-orange hover:underline">
                  +94 74 046 8422
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
