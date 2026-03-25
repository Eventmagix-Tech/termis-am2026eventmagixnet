import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { z } from "zod";

const emailSchema = z.string().trim().email().max(255);

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const validatedEmail = result.data;

    setIsSubmitting(true);
    
    const { error } = await supabase
      .from('termis_newsletter_subscribers')
      .insert([{ email }]);

    setIsSubmitting(false);

    if (error) {
      if (error.code === '23505') {
        toast({
          title: "Already subscribed",
          description: "This email is already subscribed!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong, please try again.",
          variant: "destructive",
        });
      }
      return;
    }

    setIsSubmitted(true);
    setEmail("");
    
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our mailing list.",
    });
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-r from-primary via-primary/95 to-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <h2 className="text-lg md:text-xl font-serif font-bold text-primary-foreground">
                Subscribe to Stay Informed
              </h2>
              <p className="text-primary-foreground/70 text-sm">
                Receive the latest news about TERMIS-AM
              </p>
            </div>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-accent"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-64 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-accent h-9 text-sm"
                required
              />
              <Button
                type="submit"
                variant="gold"
                size="sm"
                disabled={isSubmitting}
                className="whitespace-nowrap"
              >
                {isSubmitting ? (
                  "..."
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;