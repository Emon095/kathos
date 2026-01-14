import { motion } from "framer-motion";

const technicalSkills = [
  { name: "Cryptography", level: 85 },
  { name: "Reverse Engineering", level: 75 },
  { name: "Pwn / Binary Exploitation", level: 70 },
  { name: "Digital Forensics", level: 80 },
  { name: "Web Security", level: 75 },
  { name: "Python", level: 85 },
];

const softSkills = [
  "Leadership",
  "Team Management",
  "Strategic Planning",
  "Problem Solving",
  "Communication",
  "Mentoring",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{"{"}</span>
            Skills
            <span className="text-primary">{"}"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="text-accent">{">"}</span> Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-mono text-sm">{skill.name}</span>
                    <span className="text-primary font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="text-accent">{">"}</span> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* CTF Categories */}
            <h3 className="text-xl font-bold text-primary mt-10 mb-6 flex items-center gap-2">
              <span className="text-accent">{">"}</span> CTF Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Crypto", "Rev", "Pwn", "Forensics", "Web", "Misc"].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-accent/30 rounded-lg p-4 text-center hover:border-accent hover:cyber-glow transition-all group cursor-default"
                >
                  <span className="text-accent group-hover:text-primary transition-colors font-mono">
                    {category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
