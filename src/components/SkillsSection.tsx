import { motion } from "framer-motion";
import { Shield, Code, Target, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Security Tools",
    icon: Shield,
    skills: [
      { name: "Burp Suite", level: 85 },
      { name: "Wireshark", level: 80 },
      { name: "Ghidra/IDA", level: 70 },
      { name: "Nmap", level: 85 },
      { name: "Metasploit", level: 75 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 75 },
      { name: "Bash/Shell", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "Assembly", level: 60 },
    ],
  },
  {
    title: "CTF Categories",
    icon: Target,
    skills: [
      { name: "Cryptography", level: 85 },
      { name: "Reverse Engineering", level: 75 },
      { name: "Pwn/Binary Exploitation", level: 70 },
      { name: "Digital Forensics", level: 80 },
      { name: "Web Exploitation", level: 85 },
    ],
  },
  {
    title: "Platforms",
    icon: Monitor,
    skills: [
      { name: "Linux", level: 90 },
      { name: "Kali Linux", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Git/GitHub", level: 80 },
      { name: "VirtualBox/VMware", level: 85 },
    ],
  },
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
            <span className="text-primary">{"["}</span>
            Technical Skills
            <span className="text-primary">{"]"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
