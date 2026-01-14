import { Terminal, Github, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary">
            <Terminal className="w-5 h-5" />
            <span className="font-bold">Emon<span className="text-accent">.</span>sec</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} SM Shahrier Emon. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:smshahrieremon@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Emon095"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/shahrier03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
