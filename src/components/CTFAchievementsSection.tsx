import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star } from "lucide-react";
import { useState, useEffect } from "react";

const achievements = [
  {
    position: "1st",
    title: "Knight CTF 2025",
    description: "National CTF Competition organized by Knight Squad",
    icon: Trophy,
    color: "gold",
    badge: "1st Place",
    points: 5000,
    teams: 200,
  },
  {
    position: "2nd",
    title: "BUET CTF 2024",
    description: "Inter-University CTF hosted by BUET",
    icon: Medal,
    color: "silver",
    badge: "2nd Place",
    points: 4500,
    teams: 150,
  },
  {
    position: "3rd",
    title: "CyberSEC CTF 2024",
    description: "Regional Cybersecurity Competition",
    icon: Award,
    color: "bronze",
    badge: "3rd Place",
    points: 3800,
    teams: 100,
  },
  {
    position: "Top 10%",
    title: "picoCTF 2024",
    description: "Global CTF for students worldwide",
    icon: Star,
    color: "cyan",
    badge: "Top 10%",
    points: 3200,
    teams: 10000,
  },
];

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const CTFAchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative">
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
            CTF Achievements
            <span className="text-primary">{"]"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-card border rounded-lg p-6 transition-all ${
                achievement.color === "gold"
                  ? "border-yellow-500/30 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                  : achievement.color === "silver"
                  ? "border-gray-400/30 hover:shadow-[0_0_30px_rgba(192,192,192,0.2)]"
                  : achievement.color === "bronze"
                  ? "border-orange-600/30 hover:shadow-[0_0_30px_rgba(205,127,50,0.2)]"
                  : "border-accent/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">
                  {achievement.color === "gold" && "🥇"}
                  {achievement.color === "silver" && "🥈"}
                  {achievement.color === "bronze" && "🥉"}
                  {achievement.color === "cyan" && "🏅"}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                    {achievement.badge}
                  </span>
                  <p className="text-muted-foreground text-sm mb-4">{achievement.description}</p>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <span>
                      <strong className="text-primary">
                        <AnimatedCounter target={achievement.points} />
                      </strong>{" "}
                      pts
                    </span>
                    <span>
                      <strong className="text-primary">
                        <AnimatedCounter target={achievement.teams} />
                      </strong>
                      + teams
                    </span>
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
