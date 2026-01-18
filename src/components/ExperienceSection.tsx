import { motion } from "framer-motion";
import { GraduationCap, Users, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "leadership",
    title: "Team Leader",
    organization: "Really Annoying Bots (RAB)",
    period: "2024 - Present",
    description: "Leading and coordinating a competitive CTF team. Managing strategy development, challenge distribution, and team mentoring across Cryptography, Reverse Engineering, Pwn, and Digital Forensics categories.",
    icon: Users,
  },
  {
    type: "education",
    title: "Bachelor of Science in CSE",
    organization: "Bangladesh University of Professionals (BUP)",
    period: "2023 - Present",
    description: "Undergraduate student in Computer Science and Engineering with focus on cybersecurity, algorithms, and systems programming.",
    icon: GraduationCap,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
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
            Experience & Education
            <span className="text-primary">{"]"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 animate-glow" />

              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all group cyber-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary text-sm">{exp.organization}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Bangladesh
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
