import { motion } from "framer-motion";
import { User, Target, Cpu, Users } from "lucide-react";

const stats = [
  { icon: Target, label: "CTF Competitions", value: "15+" },
  { icon: Cpu, label: "Challenges Solved", value: "200+" },
  { icon: Users, label: "Team Members", value: "10+" },
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
            <span className="text-primary">{"<"}</span>
            About Me
            <span className="text-primary">{"/>"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-primary/20 rounded-lg overflow-hidden cyber-border"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-primary/10 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-sm text-muted-foreground font-mono">about.sh</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-muted-foreground mb-4">
                <span className="text-primary">$</span> cat about_me.txt
              </p>
              <p className="text-foreground mb-4">
                I'm <span className="text-primary">SM Shahrier Emon</span>, a passionate Computer Science and Engineering undergraduate at{" "}
                <span className="text-accent">Bangladesh University of Professionals (BUP)</span>.
              </p>
              <p className="text-foreground mb-4">
                My journey in cybersecurity began with curiosity about how systems work—and how they break. Today, I specialize in{" "}
                <span className="text-primary">vulnerability research</span>,{" "}
                <span className="text-primary">CTF competitions</span>, and{" "}
                <span className="text-primary">security analysis</span>.
              </p>
              <p className="text-foreground mb-4">
                As the <span className="text-accent">Team Leader</span> of{" "}
                <span className="text-primary">Really Annoying Bots (RAB)</span>, I coordinate strategies, mentor team members, and lead our competitive efforts in national and international CTF events.
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> <span className="animate-terminal-blink">_</span>
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Security Researcher</h3>
                <p className="text-muted-foreground">Focused on breaking things to make them stronger</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-card border border-primary/20 rounded-lg p-6 text-center hover:border-primary/50 transition-all group"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
