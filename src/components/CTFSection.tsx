import { motion } from "framer-motion";
import { Flag, ExternalLink, Shield, Lock, Binary, Search } from "lucide-react";

const ctfCategories = [
  { name: "Cryptography", icon: Lock, description: "Breaking ciphers and encryption" },
  { name: "Reverse Engineering", icon: Binary, description: "Analyzing compiled code" },
  { name: "Pwn", icon: Shield, description: "Binary exploitation" },
  { name: "Forensics", icon: Search, description: "Digital investigation" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Flag className="inline-block w-8 h-8 text-primary mr-2" />
            CTF Profile
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* CTFtime Link */}
          <motion.a
            href="https://ctftime.org/user/232234"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="block bg-card border border-primary/30 rounded-xl p-8 mb-8 hover:border-primary transition-all cyber-border group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">CTFtime Profile</h3>
                <p className="text-muted-foreground">View my competitive CTF history and rankings</p>
              </div>
              <ExternalLink className="w-8 h-8 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.a>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {ctfCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all group cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <category.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{category.name}</h4>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Team: <span className="text-primary">Really Annoying Bots</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Competitive CTF team focused on excellence in cybersecurity challenges
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold">RAB</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTFSection;
