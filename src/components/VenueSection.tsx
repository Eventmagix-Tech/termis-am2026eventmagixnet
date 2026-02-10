import { motion } from "framer-motion";
import { MapPin, Calendar, Music, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import newOrleansVenue from "@/assets/new-orleans-venue.jpg";

const VenueSection = () => {
  const highlights = [
    {
      icon: Music,
      title: "Birthplace of Jazz",
      description: "Experience live jazz on every corner of the French Quarter",
    },
    {
      icon: Utensils,
      title: "World-Class Cuisine",
      description: "Savor authentic Cajun and Creole flavors at legendary restaurants",
    },
    {
      icon: MapPin,
      title: "Historic French Quarter",
      description: "Explore centuries of culture within walking distance",
    },
    {
      icon: Calendar,
      title: "Networking Events",
      description: "Evening receptions featuring local entertainment",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/50 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">
              ⚜ Venue & Location ⚜
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              The Big Easy Awaits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Join us in New Orleans, Louisiana — where science meets soul. Experience 
              cutting-edge regenerative medicine research amidst the vibrant culture 
              of one of America's most unique cities. From jazz-filled streets to 
              world-renowned cuisine, NOLA offers the perfect backdrop for innovation 
              and collaboration.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <a href="/explore-new-orleans">Explore New Orleans</a>
            </Button>
          </motion.div>

          {/* Right - Decorative New Orleans imagery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={newOrleansVenue}
                alt="New Orleans French Quarter"
                className="w-full h-80 object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Location badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-medium">New Orleans, LA</span>
                </div>
                <div className="text-accent text-2xl">⚜</div>
              </div>
            </div>

            {/* Floating fleur-de-lis decorations */}
            <div className="absolute -top-4 -right-4 text-accent/20 text-6xl">⚜</div>
            <div className="absolute -bottom-4 -left-4 text-accent/20 text-4xl rotate-180">⚜</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
