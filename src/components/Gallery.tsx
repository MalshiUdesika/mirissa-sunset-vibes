import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/hero-beach-sunset.jpg";
import cocktailImage from "@/assets/cocktail-sunset.jpg";
import seafoodImage from "@/assets/seafood-dish.jpg";
import loungeImage from "@/assets/lounge-atmosphere.jpg";
import breakfastImage from "@/assets/breakfast-hoppers.jpg";
import sunsetImage from "@/assets/sunset-panorama.jpg";

const galleryImages = [
  { src: sunsetImage, alt: "Sunset at Mirissa Beach", category: "Sunsets", span: "col-span-2 row-span-2" },
  { src: cocktailImage, alt: "Signature Cocktails", category: "Cocktails", span: "col-span-1 row-span-1" },
  { src: seafoodImage, alt: "Fresh Grilled Lobster", category: "Food", span: "col-span-1 row-span-1" },
  { src: loungeImage, alt: "Beach Lounge Vibes", category: "Vibes", span: "col-span-1 row-span-2" },
  { src: breakfastImage, alt: "Traditional Sri Lankan Breakfast", category: "Food", span: "col-span-1 row-span-1" },
  { src: heroImage, alt: "Ocean View at Taboo", category: "Sunsets", span: "col-span-2 row-span-1" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-ocean-gradient overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sunset-orange uppercase tracking-widest text-sm font-semibold mb-4 block">
            Gallery
          </span>
          <h2 className="font-display text-section md:text-5xl text-sand-light mb-4">
            Moments of <span className="gradient-text-sunset">Magic</span>
          </h2>
          <p className="text-sand-light/70 max-w-2xl mx-auto">
            Every sunset, every dish, every smile captured at Taboo Lounge
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${image.span} min-h-[200px]`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-sunset-orange/90 text-sand-light text-xs font-semibold rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-sand-light text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/tabooloungemirissa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass-card text-sand-light hover:bg-white/20 transition-colors rounded-full"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">Follow @tabooloungemirissa</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
