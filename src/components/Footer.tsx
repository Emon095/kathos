const Footer = () => {
  return (
    <footer className="relative z-10 bg-secondary border-t border-primary/20 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="text-xl font-bold mb-4">
          <span className="text-primary">[</span>
          <span className="text-foreground">EMON</span>
          <span className="text-primary">]</span>
        </div>
        <p className="text-muted-foreground mb-2">
          &lt;/&gt; with ❤️ by SM Shahrier Emon
        </p>
        <p className="text-muted-foreground text-sm">
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
