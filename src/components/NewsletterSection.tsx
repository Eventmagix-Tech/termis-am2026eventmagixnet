import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission - replace with actual API call later
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our mailing list.",
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Subscribe to Stay Informed
          </h2>
          
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Subscribe to our mailing list to receive the latest news about TERMIS-AM
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-accent"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-accent"
                required
              />
              <Button
                type="submit"
                variant="gold"
                disabled={isSubmitting}
                className="whitespace-nowrap"
              >
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Decorative fleur-de-lis */}
          <div className="flex items-center justify-center mt-10 gap-4">
            <div className="h-px w-16 bg-accent/40" />
            <span className="text-accent text-2xl">⚜</span>
            <div className="h-px w-16 bg-accent/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;