import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Utensils, Coffee, Wine, Fish } from "lucide-react";
import breakfastImage from "@/assets/breakfast-hoppers.jpg";
import seafoodImage from "@/assets/seafood-dish.jpg";
import cocktailImage from "@/assets/cocktail-sunset.jpg";

const categories = [
  { id: "breakfast", label: "Breakfast", icon: Coffee },
  { id: "starters", label: "Starters", icon: Utensils },
  { id: "mains", label: "Signature Mains", icon: Fish },
  { id: "drinks", label: "Cocktails", icon: Wine },
];

const menuItems = {
  breakfast: [
    { name: "Egg Hoppers", description: "Traditional crispy rice flour bowl with soft egg center", price: "LKR 650", popular: true },
    { name: "String Hoppers", description: "Steamed rice noodle nests with pol sambol", price: "LKR 550" },
    { name: "Fresh Fruit Platter", description: "Seasonal tropical fruits with honey drizzle", price: "LKR 850" },
    { name: "King Coconut Smoothie", description: "Fresh king coconut, banana & passion fruit", price: "LKR 600", popular: true },
    { name: "Sri Lankan Breakfast", description: "Hoppers, dhal curry, sambol trio & fresh juice", price: "LKR 1,200" },
  ],
  starters: [
    { name: "Pol Sambol", description: "Fresh coconut with chili, lime & Maldive fish", price: "LKR 450" },
    { name: "Isso Vadai", description: "Crispy prawn & lentil fritters with curry leaves", price: "LKR 850", popular: true },
    { name: "Fresh Ceviche", description: "Today's catch with citrus, coconut & kochchi", price: "LKR 1,200" },
    { name: "Devilled Calamari", description: "Wok-tossed squid with bell peppers & spices", price: "LKR 1,100" },
    { name: "Fish Cutlets", description: "Traditional spiced fish patties with date chutney", price: "LKR 750" },
  ],
  mains: [
    { name: "Ambul Thiyal", description: "Sour fish curry - Tangalle style with goraka", price: "LKR 1,800", popular: true },
    { name: "Black Pork Curry", description: "Slow-cooked in roasted spices & kithul treacle", price: "LKR 2,200" },
    { name: "Grilled Lobster", description: "Fresh Mirissa lobster with garlic butter & herbs", price: "LKR 3,500", popular: true },
    { name: "Kottu Roti", description: "Chopped roti with vegetables, egg & your choice of protein", price: "LKR 1,400" },
    { name: "Lamprais", description: "Dutch-Lankan rice parcel with frikkadels & ash plantain", price: "LKR 1,600" },
    { name: "Seafood Rice", description: "Fragrant rice with prawns, calamari & crab meat", price: "LKR 2,400" },
  ],
  drinks: [
    { name: "Sunset Arrack Sour", description: "Ceylon arrack, passion fruit, lime & aromatic bitters", price: "LKR 1,200", popular: true },
    { name: "Passionfruit Mojito", description: "White rum, fresh passion fruit, mint & lime", price: "LKR 1,100" },
    { name: "Coconut Martini", description: "Vodka, coconut cream, pineapple & vanilla", price: "LKR 1,300" },
    { name: "Mirissa Mule", description: "Ginger-infused arrack, lime & ginger beer", price: "LKR 1,000", popular: true },
    { name: "Tropical Sangria", description: "Red wine, exotic fruits & spiced rum", price: "LKR 950" },
    { name: "Fresh Seafood Martini", description: "Gin, cucumber, dill & oyster essence", price: "LKR 1,400" },
  ],
};

const categoryImages = {
  breakfast: breakfastImage,
  starters: seafoodImage,
  mains: seafoodImage,
  drinks: cocktailImage,
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("mains");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-sand-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sunset-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-ocean-mid/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sunset-orange uppercase tracking-widest text-sm font-semibold mb-4 block">
            Our Menu
          </span>
          <h2 className="font-display text-section md:text-5xl text-ocean-deep mb-4">
            A Taste of <span className="gradient-text-ocean">Paradise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From sunrise hoppers to sunset cocktails, every dish tells the story of Sri Lanka's rich culinary heritage
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-ocean-deep text-sand-light shadow-elevated"
                  : "bg-card text-ocean-deep hover:bg-ocean-deep/10 border border-border"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl text-ocean-deep group-hover:text-sunset-orange transition-colors">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="px-2 py-0.5 bg-sunset-orange/10 text-sunset-orange text-xs font-semibold rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <span className="font-display text-lg text-sunset-orange whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  
                  {/* Hover Effect Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sunset-orange to-sunset-gold rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="sticky top-32"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeCategory}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  src={categoryImages[activeCategory as keyof typeof categoryImages]}
                  alt={`${activeCategory} at Taboo Lounge`}
                  className="w-full h-[500px] object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-card p-4 inline-block">
                  <p className="text-sand-light font-display text-lg">
                    {categories.find(c => c.id === activeCategory)?.label}
                  </p>
                  <p className="text-sand-light/70 text-sm">
                    {menuItems[activeCategory as keyof typeof menuItems].length} items available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
