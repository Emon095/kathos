import { motion } from "framer-motion";
import { Trophy, Flag, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: Trophy, label: "CTFs Played", value: "15+" },
  { icon: Flag, label: "Flags Captured", value: "50+" },
  { icon: Users, label: "Team Members", value: "10+" },
  { icon: BookOpen, label: "Years Learning", value: "3+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{"["}</span>
            About Me
            <span className="text-primary">{"]"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-primary/20 rounded-lg overflow-hidden cyber-border">
              <div className="flex items-center gap-3 px-4 py-3 bg-primary/5 border-b border-primary/20">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground">about_emon.sh</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <p>
                  <span className="text-primary">$</span>
                  <span className="text-accent ml-2">cat</span>
                  <span className="text-muted-foreground ml-2">profile.txt</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  I am a passionate <span className="text-primary">Cybersecurity Enthusiast</span> and{" "}
                  <span className="text-primary">CTF Player</span> from Bangladesh. Currently pursuing my
                  Bachelor's in Computer Science & Engineering at Bangladesh University of Professionals (BUP).
                </p>
                <p>
                  <span className="text-primary">$</span>
                  <span className="text-accent ml-2">echo</span>
                  <span className="text-muted-foreground ml-2">$INTERESTS</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  Cryptography, Reverse Engineering, Pwn, Digital Forensics, Web Security
                </p>
                <p>
                  <span className="text-primary">$</span>
                  <span className="text-accent ml-2">cat</span>
                  <span className="text-muted-foreground ml-2">mission.txt</span>
                </p>
                <p className="text-muted-foreground pl-4">
                  As the <span className="text-primary">Team Leader of Really Annoying Bots (RAB)</span>,
                  I lead a competitive CTF team, coordinating strategies and mentoring members across
                  multiple security domains.
                </p>
                <p className="terminal-cursor">
                  <span className="text-primary">$</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-all group"
              >
                <stat.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-primary cyber-text-glow">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
