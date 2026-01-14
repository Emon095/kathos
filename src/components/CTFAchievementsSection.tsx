import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Target } from "lucide-react";
import { useState, useEffect } from "react";

const achievements = [
  {
    position: "3rd",
    title: "Black Hat USA CTF 2025",
    description: "Ranked 3rd out of 397 global teams, scoring 7,685 points at one of the world's most competitive international CTF events.",
    icon: Trophy,
    color: "from-amber-600 to-amber-400",
    badge: "🌍 International",
    points: 7685,
    teams: 397,
  },
  {
    position: "1st & 2nd",
    title: "BUP CTF 2025",
    description: "Dominant preliminary performance (1st Place) followed by a strong onsite finish (2nd Place) in a highly competitive inter-university battlefield.",
    icon: Medal,
    color: "from-yellow-500 to-amber-300",
    badge: "🏫 Inter-University",
  },
  {
    position: "2nd",
    title: "Circuit Clash 1.0",
    description: "Inter-university CTF where consistency, teamwork, and precision secured a podium finish.",
    icon: Award,
    color: "from-gray-400 to-gray-200",
    badge: "🏫 Inter-University",
  },
  {
    position: "3rd",
    title: "Televerse 1.0",
    description: "National-level CTF competition where we ranked among the country's top teams.",
    icon: Star,
    color: "from-amber-700 to-amber-500",
    badge: "🇧🇩 National",
  },
  {
    position: "4th",
    title: "DIU CTF 2025",
    description: "A close-fought contest where every point mattered, demonstrating resilience and technical adaptability.",
    icon: Target,
    color: "from-primary to-accent",
    badge: "🏫 Inter-University",
  },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

const CTFAchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold">
              CTF <span className="gradient-text">Achievements</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            2025 Highlights — Showcasing excellence in international, national, and inter-university CTF competitions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all cyber-border">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Position Badge */}
                  <div className={`flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}>
                    <div className="text-center">
                      <achievement.icon className="w-6 h-6 text-black mx-auto mb-1" />
                      <span className="text-black font-bold text-sm">{achievement.position}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30">
                        {achievement.badge}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Stats for Black Hat */}
                    {achievement.points && (
                      <div className="flex gap-6 mt-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">
                            <AnimatedCounter target={achievement.points} />
                          </p>
                          <p className="text-xs text-muted-foreground">Points</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-accent">
                            <AnimatedCounter target={achievement.teams || 0} />
                          </p>
                          <p className="text-xs text-muted-foreground">Teams</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTFAchievementsSection;
