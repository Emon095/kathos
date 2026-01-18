import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import TypewriterText from "./TypewriterText";
import profilePhoto from "@/assets/profile-photo.jpg";

const phrases = [
  "Cybersecurity Enthusiast",
  "CTF Player",
  "Security Researcher",
  "Team Leader @ RAB",
  "Crypto & Forensics Specialist",
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <span className="text-primary font-mono">$</span>
              <span className="text-accent font-mono ml-2">whoami</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              SM Shahrier Emon
              <span className="text-primary">/&gt;</span>
            </h1>

            <div className="text-xl md:text-2xl mb-6 min-h-[2rem]">
              <TypewriterText phrases={phrases} />
            </div>

            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              CSE Undergraduate | Security Researcher | CTF Team Leader
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
              >
                <Mail size={18} />
                Get In Touch
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
              >
                <FileText size={18} />
                View Profile
              </a>
            </div>

            <div className="flex gap-8 justify-center lg:justify-start">
              {[
                { value: "15+", label: "CTF Competitions" },
                { value: "3+", label: "Years Experience" },
                { value: "10+", label: "Team Members Led" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary cyber-text-glow">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-[-20px] bg-gradient-radial from-primary/30 to-transparent rounded-full animate-pulse" />
              <img
                src={profilePhoto}
                alt="SM Shahrier Emon"
                className="w-full h-full object-cover rounded-full border-4 border-primary relative z-10"
              />
              <div className="absolute inset-[-10px] border-2 border-accent rounded-full animate-spin-slow opacity-50" style={{ animationDuration: "20s" }} />
            </div>

            <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-card border border-primary/20 rounded-full">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
