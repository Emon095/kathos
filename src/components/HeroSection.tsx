import { motion } from "framer-motion";
import { ChevronDown, Shield, Code, Terminal } from "lucide-react";
import TypewriterText from "./TypewriterText";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const skills = ["Cryptography", "Reverse Engineering", "Pwn", "Digital Forensics", "CTF Player", "Team Leader"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Security Researcher</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">SM Shahrier</span>
              <br />
              <span className="gradient-text">Emon</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl mb-4">
              CSE Undergraduate | Cybersecurity Enthusiast | CTF Player & Team Leader
            </p>

            <div className="h-8 mb-8 font-mono text-lg">
              <span className="text-muted-foreground">{">"} </span>
              <TypewriterText words={skills} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all cyber-glow flex items-center justify-center gap-2"
              >
                <Terminal className="w-5 h-5" />
                View Profile
              </a>
              <a
                href="#achievements"
                className="px-8 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
              >
                <Code className="w-5 h-5" />
                CTF Journey
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-xl animate-pulse" />
              
              {/* Profile container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 cyber-glow">
                <img
                  src={profilePhoto}
                  alt="SM Shahrier Emon"
                  className="w-full h-full object-cover"
                />
                
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scanline" />
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-card border border-primary/30 rounded-lg flex items-center justify-center"
              >
                <Shield className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-card border border-accent/30 rounded-lg flex items-center justify-center"
              >
                <Code className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
