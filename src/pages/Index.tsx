import { motion } from "framer-motion";
import mimoLogo from "@/assets/mimo-logo.png";
import constructionImg from "@/assets/construction-illustration.png";
import { Wrench, Clock, Mail, Phone, MessageCircle } from "lucide-react";

const FloatingGear = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay }}
  >
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gold opacity-20">
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Floating gears background */}
      <FloatingGear className="absolute top-10 right-10 w-20 h-20 hidden md:block" delay={0} />
      <FloatingGear className="absolute top-40 left-8 w-14 h-14 hidden md:block" delay={2} />
      <FloatingGear className="absolute bottom-20 right-1/4 w-16 h-16 hidden md:block" delay={4} />
      <FloatingGear className="absolute bottom-40 left-16 w-10 h-10 hidden md:block" delay={1} />

      {/* Construction stripe top */}
      <div className="construction-stripe h-2 w-full" />

      {/* Header */}
      <motion.header
        className="flex justify-center pt-8 pb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={mimoLogo} alt="MIMO Branding & Supplies" className="h-14 md:h-20" />
      </motion.header>

      {/* Main content */}
      <main className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Illustration */}
        <motion.div
          className="w-full max-w-2xl mx-auto my-4 animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={constructionImg}
            alt="Website under construction"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wrench className="w-6 h-6 text-accent animate-bounce-slow" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary">
              We're Building Something Amazing
            </h1>
            <Wrench className="w-6 h-6 text-accent animate-bounce-slow" style={{ animationDelay: "0.5s" }} />
          </div>

          <p className="text-muted-foreground text-lg md:text-xl mb-2 font-body">
            Our website is currently under maintenance.
          </p>
          <p className="text-muted-foreground font-body mb-8">
            We're working hard to bring you a better experience. Check back soon!
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-full max-w-md mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-2 justify-center mb-2 text-muted-foreground text-sm font-body">
            <Clock className="w-4 h-4" />
            <span>Progress</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1 font-body">65% Complete</p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center text-sm text-muted-foreground font-body mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <a href="tel:0116001100" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            0116001100
          </a>
          <a href="https://wa.me/0116001100" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a href="mailto:info@mimobranding.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            info@mimobranding.com
          </a>
        </motion.div>
      </main>

      {/* Construction stripe bottom */}
      <div className="construction-stripe h-2 w-full fixed bottom-0" />
    </div>
  );
};

export default Index;
