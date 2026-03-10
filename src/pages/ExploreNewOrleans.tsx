import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import frenchQuarterImg from "@/assets/explore-french-quarter.jpg";
import jazz1Img from "@/assets/explore-jazz-1.jpg";
import jazz2Img from "@/assets/explore-jazz-2.jpg";
import wwiiMuseumImg from "@/assets/explore-wwii-museum.jpg";
import streetcarImg from "@/assets/explore-streetcar.jpg";

const attractions = [
  {
    id: 1,
    title: "French Quarter",
    description: "The historic heart of New Orleans, the French Quarter is full of iconic architecture, street performers, restaurants, jazz clubs, and unique shops. Wander past balconies with wrought-iron details, stop for Café du Monde beignets and café au lait, or explore Jackson Square and St. Louis Cathedral.",
    image: frenchQuarterImg,
  },
  {
    id: 2,
    title: "Live Jazz & Music Venues",
    description: "New Orleans is the birthplace of jazz — be sure to experience live music at venues around the city. Check out clubs and bars on Frenchmen Street, Preservation Hall, or local spots featuring brass bands and blues rhythms that make this city's music world-renowned.",
    image: jazz1Img,
  },
  {
    id: 3,
    title: "National WWII Museum",
    description: "Ranked among the top museums in the U.S., the National WWII Museum offers immersive exhibits and stories from World War II — a must-visit for history lovers. (Plan ahead for timed entry.)",
    image: jazz2Img,
  },
  {
    id: 4,
    title: "Mississippi Riverboat Cruise",
    description: "Enjoy scenic views of the city from the mighty Mississippi River aboard a historic steamboat. Choose a jazz cruise or sunset dinner cruise for a memorable experience.",
    image: wwiiMuseumImg,
  },
  {
    id: 5,
    title: "Garden District & Streetcar Ride",
    description: "Take a ride on the iconic St. Charles Streetcar through the Garden District. Admire grand historic homes, lush oak-lined streets, and boutique shopping.",
    image: streetcarImg,
  },
];

const ExploreNewOrleans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <PageHeader
          title="Explore New Orleans"
          subtitle="We are excited to welcome you to New Orleans, Louisiana for TERMIS-AM 2026! Known as &quot;The Big Easy,&quot; New Orleans is famous for its rich history, vibrant music scene, distinctive cuisine, and unforgettable atmosphere."
          tag="⚜ The Big Easy ⚜"
        />

        {/* Attractions */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Image(s) */}
                  <div className="w-full md:w-1/2">
                    {attraction.image ? (
                      <img
                        src={attraction.image}
                        alt={attraction.title}
                        className="rounded-xl shadow-lg w-full h-72 object-cover"
                      />
                    ) : (
                      <div className="rounded-xl bg-gradient-to-br from-accent/20 to-gold/20 w-full h-72 flex items-center justify-center">
                        <span className="text-6xl">🚢</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                        {attraction.id}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                        {attraction.title}
                      </h2>
                    </div>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                      {attraction.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExploreNewOrleans;
