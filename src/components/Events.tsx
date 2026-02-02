import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Music, Sparkles, Globe } from "lucide-react";

const events = [
  {
    title: "Friday Sunset Sessions",
    description: "Live DJ sets as the sun dips below the horizon. Cocktail specials all evening.",
    day: "Every Friday",
    time: "5:00 PM - 10:00 PM",
    icon: Music,
    featured: true,
  },
  {
    title: "Sri Lankan Cultural Night",
    description: "Traditional dance performances, authentic cuisine tasting & local music.",
    day: "Saturdays",
    time: "7:00 PM - 10:00 PM",
    icon: Sparkles,
  },
  {
    title: "Acoustic Beach Evenings",
    description: "Intimate acoustic performances under the stars with specialty wines.",
    day: "Wednesdays",
    time: "6:30 PM - 9:30 PM",
    icon: Music,
  },
  {
    title: "Full Moon Beach Party",
    description: "Monthly celebration under the moon with fire dancers & themed cocktails.",
    day: "Every Full Moon",
    time: "8:00 PM - Late",
    icon: Globe,
    featured: true,
  },
];

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-24 md:py-32 bg-sand-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sunset-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sunset-orange uppercase tracking-widest text-sm font-semibold mb-4 block">
            Live Events
          </span>
          <h2 className="font-display text-section md:text-5xl text-ocean-deep mb-4">
            Unforgettable <span className="gradient-text-ocean">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for specially curated events that celebrate music, culture, and the magic of Mirissa
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden ${
                event.featured ? "md:col-span-1" : ""
              }`}
            >
              <div
                className={`relative p-8 h-full ${
                  event.featured
                    ? "bg-ocean-deep text-sand-light"
                    : "bg-card border border-border"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    event.featured
                      ? "bg-sunset-orange/20"
                      : "bg-ocean-deep/10"
                  }`}
                >
                  <event.icon
                    className={`w-7 h-7 ${
                      event.featured ? "text-sunset-orange" : "text-ocean-deep"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`font-display text-2xl mb-3 ${
                    event.featured ? "text-sand-light" : "text-ocean-deep"
                  }`}
                >
                  {event.title}
                </h3>
                <p
                  className={`mb-6 ${
                    event.featured ? "text-sand-light/70" : "text-muted-foreground"
                  }`}
                >
                  {event.description}
                </p>

                {/* Time Info */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-4 h-4 ${event.featured ? "text-sunset-orange" : "text-ocean-mid"}`} />
                    <span className={event.featured ? "text-sand-light/80" : "text-ocean-deep"}>
                      {event.day}
                    </span>
                  </div>
                  <span className={event.featured ? "text-sand-light/60" : "text-muted-foreground"}>
                    {event.time}
                  </span>
                </div>

                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-sunset-orange text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover Effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    event.featured
                      ? "bg-gradient-to-r from-sunset-orange to-sunset-gold"
                      : "bg-gradient-to-r from-ocean-deep to-ocean-mid"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
