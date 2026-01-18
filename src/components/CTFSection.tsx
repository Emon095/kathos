import { motion } from "framer-motion";
import { Flag, Lock, Cog, Bomb, Search, ExternalLink } from "lucide-react";

const ctfCategories = [
  { name: "Cryptography", icon: Lock, description: "Breaking ciphers, analyzing encryption algorithms" },
  { name: "Reverse Engineering", icon: Cog, description: "Analyzing binaries, understanding malware" },
  { name: "Pwn / Binary Exploitation", icon: Bomb, description: "Buffer overflows, ROP chains" },
  { name: "Digital Forensics", icon: Search, description: "Analyzing disk images, memory dumps" },
];

const CTFSection = () => {
  return (
    <section id="ctf" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-primary">{"["}</span>
            <Flag className="w-8 h-8 text-primary" />
            CTF Profile
            <span className="text-primary">{"]"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          <motion.a
            href="https://ctftime.org/team/372428"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="block bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all cyber-border"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🏴</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold">CTFtime Profile</h3>
                <p className="text-muted-foreground">View our team's official CTFtime profile, rankings, and competition history</p>
              </div>
              <ExternalLink className="w-6 h-6 text-primary" />
            </div>
          </motion.a>

          <div className="grid md:grid-cols-4 gap-4">
            {ctfCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-primary/20 rounded-lg p-6 text-center hover:border-accent/50 transition-all"
              >
                <category.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-accent mb-2">{category.name}</h4>
                <p className="text-xs text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/20 rounded-lg p-8 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent animate-pulse" />
            <div className="relative z-10">
              <h3 className="text-muted-foreground mb-4">Our Team</h3>
              <div className="text-5xl md:text-6xl font-bold text-primary cyber-text-glow tracking-widest mb-2">
                RAB
              </div>
              <p className="text-lg text-muted-foreground">Really Annoying Bots</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTFSection;
