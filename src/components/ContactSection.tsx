import { motion } from "framer-motion";
import { Mail, Github, Facebook, Send, Terminal } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:smshahrieremon@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Terminal className="inline-block w-8 h-8 text-primary mr-2" />
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-mono">
                  {">"} name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-mono"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-mono">
                  {">"} email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-mono"
                  placeholder="Enter your email..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-mono">
                  {">"} message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-mono resize-none"
                  placeholder="Type your message..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all cyber-glow flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card border border-primary/20 rounded-lg p-6 cyber-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>

              <div className="space-y-4">
                <a
                  href="mailto:smshahrieremon@gmail.com"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-mono text-sm">smshahrieremon@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Emon095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground font-mono text-sm">@Emon095</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/shahrier03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Facebook</p>
                    <p className="text-foreground font-mono text-sm">@shahrier03</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
